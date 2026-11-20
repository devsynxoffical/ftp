<?php
// Lead delivery settings for Hostinger. Edit on the server (File Manager:
// public_html/api/config.php). This file is blocked from the web by .htaccess.

// Every lead is emailed here.
const LEAD_TO_EMAIL = 'info@funnelsthatprint.com';

// Sender address. Use a mailbox on your own domain (create it in Hostinger
// hPanel > Emails) so messages are not marked as spam.
const LEAD_FROM_EMAIL = 'noreply@funnelsthatprint.com';

// Optional: a GoHighLevel inbound webhook (or Zapier / Make URL). Leave empty
// to send email only.
const LEAD_WEBHOOK_URL = '';
