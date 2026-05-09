# Lead Capture Setup

This repo has the lead form code wired already. Production needs these services:

- Cloudflare Workers KV: `LEADS_RL` binding for rate limit and duplicate suppression.
- Cloudflare Turnstile: public site key for the browser and secret key for `/api/lead`.
- Lead webhook: recommended Google Sheets + Apps Script `/exec` endpoint.
- Tracking IDs: GA4, Google Ads conversion, and Meta Pixel.

Current lead destination:

- Google Sheet:
  `https://docs.google.com/spreadsheets/d/12icoWSNUFbADhnn794nwEdOrv3U-WaT_yPu71AER4nU/edit?usp=sharing`
- Apps Script deployment:
  `AKfycbz4mTI0wx2ng4zZf8iTDDzHjy41gjXj_7A3dhIpZfybdKJ8yT9nJ3wy-yghwf3gbu01cQ`

## 1. Use Node 22+ for Wrangler

The current shell may be on Node 20, but this machine has a newer Node through `nvm`.

```sh
source ~/.nvm/nvm.sh
node -v
npx wrangler --version
```

Every Wrangler command below assumes that `source ~/.nvm/nvm.sh` has run in the same shell.

## 2. Create the Google Sheets Webhook

1. Create a Google Sheet for leads.
2. Open `Extensions -> Apps Script`.
3. Paste the contents of `docs/apps-script-lead-webhook.gs`.
4. Click `Deploy -> New deployment`.
5. Select type `Web app`.
6. Set `Execute as` to `Me`.
7. Set `Who has access` to `Anyone`.
8. Authorize the script and copy the Web app `/exec` URL.

The Worker posts server-to-server to this URL, so browser CORS is not involved.

## 3. Configure Local Env

Create `.env.local` for browser-exposed build values:

```dotenv
VITE_TURNSTILE_SITE_KEY=
VITE_GA_MEASUREMENT_ID=
VITE_GOOGLE_ADS_CONVERSION_ID=
VITE_GOOGLE_ADS_CONVERSION_LABEL=
VITE_META_PIXEL_ID=
```

Create `.dev.vars` for server-only local Worker values. The Google Sheets webhook is already wired
to the current Apps Script deployment:

```dotenv
LEAD_WEBHOOK_URL="https://script.google.com/macros/s/AKfycbz4mTI0wx2ng4zZf8iTDDzHjy41gjXj_7A3dhIpZfybdKJ8yT9nJ3wy-yghwf3gbu01cQ/exec"
TURNSTILE_SECRET_KEY="YOUR_TURNSTILE_SECRET_KEY"
```

Do not put secrets behind a `VITE_` prefix. `VITE_*` values are bundled into browser JavaScript.

## 4. Cloudflare KV

Log in first:

```sh
source ~/.nvm/nvm.sh
npx wrangler login
```

Create the production and preview KV namespaces:

```sh
npx wrangler kv namespace create LEADS_RL
npx wrangler kv namespace create LEADS_RL --preview
```

Paste the returned IDs into `wrangler.jsonc`:

```jsonc
"kv_namespaces": [
  {
    "binding": "LEADS_RL",
    "id": "PRODUCTION_NAMESPACE_ID",
    "preview_id": "PREVIEW_NAMESPACE_ID"
  }
]
```

## 5. Cloudflare Turnstile

In Cloudflare Dashboard:

1. Go to `Turnstile`.
2. Create a widget for the production hostname.
3. Use the public site key in `.env.local` as `VITE_TURNSTILE_SITE_KEY`.
4. Put the secret key in `.dev.vars` as `TURNSTILE_SECRET_KEY`.

## 6. Production Secrets

`LEAD_WEBHOOK_URL` is configured in `wrangler.jsonc` as a server-only Worker var.
`TURNSTILE_SECRET_KEY` remains a required secret. For the first deploy, upload it from your local
`.dev.vars` file with `--secrets-file`. After the Worker exists, rotate it with
`npx wrangler secret put TURNSTILE_SECRET_KEY`.

## 7. Tracking IDs

GA4:

- Create or open a GA4 Web data stream.
- Copy the Measurement ID, which starts with `G-`.
- Set `VITE_GA_MEASUREMENT_ID`.

Google Ads:

- Create a Website conversion action for successful lead submit.
- In tag setup, copy the Conversion ID, usually `AW-...`, and the Conversion Label.
- Set `VITE_GOOGLE_ADS_CONVERSION_ID` and `VITE_GOOGLE_ADS_CONVERSION_LABEL`.

Meta:

- Create or open the Pixel/Dataset in Events Manager.
- Copy the Pixel ID.
- Set `VITE_META_PIXEL_ID`.

The app fires GA4 `generate_lead`, Google Ads `conversion`, and Meta `Lead` only after `/api/lead` returns `{ "ok": true }`.

## 8. Deploy and Verify

Build locally:

```sh
npm run build
```

Deploy:

```sh
source ~/.nvm/nvm.sh
npx wrangler deploy --secrets-file .dev.vars
```

Later deploys can use `npx wrangler deploy` after both required secrets exist in Cloudflare.

Smoke test from the live site:

1. Submit a real test lead from the browser.
2. Confirm the Google Sheet gets a new row.
3. Confirm Cloudflare Turnstile does not reject the lead.
4. Confirm the success UI appears.
5. Check GA4 Realtime/DebugView, Google Tag Assistant, and Meta Events Manager Test Events.

Google Ads and Meta reporting can lag; the real-time/debug tools are the fastest validation path.
