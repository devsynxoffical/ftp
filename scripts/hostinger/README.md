# Hosting on Hostinger

The site is published to Hostinger as a static build on the `hostinger` branch. That branch holds only the files that go into `public_html`.

## Rebuild after a change

```bash
npm ci
node scripts/build-hostinger.mjs hostinger-build
```

Then replace the contents of the `hostinger` branch with `hostinger-build/` and push it.

## What the build does

- **Pages:** every page becomes a static HTML file (`output: "export"`), built from a temporary copy so the Vercel setup is unchanged.
- **`.htaccess`:**
  - forces `https://www.` and removes trailing slashes;
  - serves clean URLs (`/about` serves `about.html`);
  - carries the permanent redirects from `next.config.ts` and the old `/case?id=` links;
  - adds security and cache headers and the 404 page.
- **`api/contact.php`:**
  - replaces the Next.js `/api/contact` and `/api/newsletter` routes;
  - emails every lead to `LEAD_TO_EMAIL` and, if set, posts it to `LEAD_WEBHOOK_URL`;
  - also appends each lead to `leads.log` one folder above `public_html`, as a backup.
- **`api/config.php`:** holds the lead settings. The web cannot open it (blocked in `.htaccess`).

## One-time setup in hPanel

1. **Websites → funnelsthatprint.com → Advanced → Git.**
   - Repository: `https://github.com/devsynxoffical/ftp`
   - Branch: `hostinger`
   - Install path: leave empty, so the files go into `public_html`.
   - Deploy. For a private repository, add the SSH key that hPanel shows as a deploy key on GitHub.
2. **Emails:** create the mailbox `noreply@funnelsthatprint.com`, the sender in `api/config.php`, so lead emails are not marked as spam.
3. **DNS:** point `funnelsthatprint.com` and `www` to Hostinger instead of Vercel (the hPanel DNS zone, or the A record and CNAME that Hostinger shows).
4. **SSL:** enable the free SSL certificate for both `funnelsthatprint.com` and `www.funnelsthatprint.com`.
