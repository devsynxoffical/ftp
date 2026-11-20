<?php
/**
 * Lead handler for the Hostinger static build. Same contract as the Next.js
 * /api/contact route: POST JSON {type, name, email, phone, company, message,
 * fields{}, page, honeypot} -> {"success":true} or {"error": "..."}.
 * Every lead is emailed to LEAD_TO_EMAIL and, if set, posted to LEAD_WEBHOOK_URL.
 */
require __DIR__ . '/config.php';
header('Content-Type: application/json; charset=utf-8');

function out($code, $data) { http_response_code($code); echo json_encode($data); exit; }
function clean($v, $max) { return trim(mb_substr(str_replace(["\r", "\0"], '', (string)($v ?? '')), 0, $max)); }

if ($_SERVER['REQUEST_METHOD'] !== 'POST') out(405, ['error' => 'Method not allowed.']);

// Simple rate limit: 5 submissions per minute per IP.
$ip = $_SERVER['REMOTE_ADDR'] ?? '0.0.0.0';
$rl = sys_get_temp_dir() . '/ftp_lead_' . md5($ip);
$hits = array_filter(@json_decode(@file_get_contents($rl), true) ?: [], fn($t) => $t > time() - 60);
if (count($hits) >= 5) out(429, ['error' => 'Too many requests. Please wait a minute and try again.']);
$hits[] = time();
@file_put_contents($rl, json_encode(array_values($hits)));

$body = json_decode(file_get_contents('php://input'), true);
if (!is_array($body)) out(400, ['error' => 'Invalid request.']);
if (!empty($body['honeypot'])) out(200, ['success' => true]);

$email = strtolower(clean($body['email'] ?? '', 200));
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) out(400, ['error' => 'Please add a valid email address.']);

$type = in_array($body['type'] ?? '', ['contact', 'qualifier', 'newsletter'], true) ? $body['type'] : 'contact';
$fields = [];
if (isset($body['fields']) && is_array($body['fields'])) {
  foreach (array_slice($body['fields'], 0, 12, true) as $k => $v) $fields[clean($k, 40)] = clean($v, 300);
}
$page = clean($body['page'] ?? '/', 200);
if ($page === '' || $page[0] !== '/') $page = '/';
$lead = [
  'type' => $type,
  'name' => clean($body['name'] ?? '', 100),
  'email' => $email,
  'phone' => clean($body['phone'] ?? '', 40),
  'company' => clean($body['company'] ?? '', 200),
  'message' => clean($body['message'] ?? '', 3000),
  'fields' => $fields,
  'page' => 'https://www.funnelsthatprint.com' . $page,
  'at' => gmdate('c'),
];

$delivered = [];

// Email
$subject = $type === 'newsletter' ? "Newsletter signup: $email"
  : 'New lead (' . ($type === 'qualifier' ? 'funnel planner' : 'contact form') . '): ' . ($lead['name'] ?: $email);
$lines = ["Type: $type", "Name: {$lead['name']}", "Email: $email", "Phone: {$lead['phone']}", "Company / website: {$lead['company']}"];
foreach ($fields as $k => $v) $lines[] = "$k: $v";
$lines[] = "Page: {$lead['page']}";
$lines[] = "Received: {$lead['at']}";
$lines[] = '';
$lines[] = $lead['message'];
$headers = 'From: Funnels That Print <' . LEAD_FROM_EMAIL . ">\r\nReply-To: $email\r\nContent-Type: text/plain; charset=utf-8";
if (@mail(LEAD_TO_EMAIL, '=?UTF-8?B?' . base64_encode($subject) . '?=', implode("\n", $lines), $headers, '-f' . LEAD_FROM_EMAIL)) $delivered[] = 'email';

// Webhook
if (LEAD_WEBHOOK_URL !== '') {
  $ch = curl_init(LEAD_WEBHOOK_URL);
  curl_setopt_array($ch, [CURLOPT_POST => true, CURLOPT_RETURNTRANSFER => true, CURLOPT_TIMEOUT => 8,
    CURLOPT_HTTPHEADER => ['Content-Type: application/json'],
    CURLOPT_POSTFIELDS => json_encode(array_merge($lead, $fields, ['source' => 'funnelsthatprint.com']))]);
  curl_exec($ch);
  $code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
  curl_close($ch);
  if ($code >= 200 && $code < 300) $delivered[] = 'webhook';
}

// Backup log outside the web root, so no lead is ever lost.
@file_put_contents(dirname(__DIR__, 2) . '/leads.log', json_encode($lead + ['delivered' => $delivered]) . "\n", FILE_APPEND | LOCK_EX);

if (!$delivered) out(502, ['error' => 'We could not send this right now. Please message us on WhatsApp or email info@funnelsthatprint.com.']);
out(200, ['success' => true]);
