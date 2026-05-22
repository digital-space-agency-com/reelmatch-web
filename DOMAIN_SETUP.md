# Domain Configuration Guide for reelmatch.app

## Current Issue
- `reelmatch.app` has a valid Let's Encrypt certificate ✅
- `www.reelmatch.app` is receiving a GitHub Pages wildcard certificate (`*.github.io`) ❌
- This causes certificate mismatch warnings

## Quick Fix Summary

**The Problem:** `www.reelmatch.app` needs to be configured as a CNAME record pointing directly to your GitHub Pages URL (`digital-space-agency-com.github.io`), not to `reelmatch.app` or as A records.

**The Solution:** Configure `www.reelmatch.app` as a CNAME record pointing to `digital-space-agency-com.github.io`. GitHub Pages will then provision SSL certificates for both domains.

## Solution: Configure Both Domains in GitHub Pages

### Step 1: Configure DNS in NameCheap

1. Log in to your NameCheap account
2. Go to **Domain List** → Select **reelmatch.app** → Click **Manage**
3. Go to the **Advanced DNS** tab

#### Current DNS Records (verify these exist):
- **A Record** for `@` (root domain):
  - Host: `@`
  - Value: `185.199.108.153`
  - TTL: Automatic
  
- **A Record** for `@` (root domain - second IP):
  - Host: `@`
  - Value: `185.199.109.153`
  - TTL: Automatic

#### Add CNAME Record for www (Required for GitHub Pages):
GitHub Pages requires **CNAME records for subdomains** (like `www`), not A records. A records are only for the root domain.

- **CNAME Record** for `www`:
  - Host: `www`
  - Value: `digital-space-agency-com.github.io`
  - TTL: Automatic

**Important:** 
- Remove any A records for `www` (GitHub Pages will show an error if www uses A records)
- The CNAME must point to your GitHub Pages URL: `digital-space-agency-com.github.io`
- This is different from pointing to `reelmatch.app` - it must point directly to GitHub Pages

### Step 2: Configure Domain in GitHub Pages

1. Go to your GitHub repository
2. Navigate to **Settings** → **Pages**
3. Under **Custom domain**, you should see `reelmatch.app`
4. **Important:** GitHub Pages only allows one custom domain in the settings, but it will automatically provision certificates for both `reelmatch.app` and `www.reelmatch.app` if:
   - Root domain (`reelmatch.app`) uses A records pointing to GitHub Pages IPs
   - Subdomain (`www.reelmatch.app`) uses a CNAME record pointing to `digital-space-agency-com.github.io`
   - The custom domain is set to `reelmatch.app` (non-www version)

5. GitHub Pages will automatically:
   - Detect both domains pointing to it
   - Provision SSL certificates for both domains
   - Enable HTTPS for both domains
   - This may take 5-10 minutes after DNS changes

### Step 3: Verify Configuration

After making changes, wait 5-10 minutes for DNS propagation, then verify:

```bash
# Check DNS records
dig reelmatch.app A
dig www.reelmatch.app CNAME

# Check SSL certificates
echo | openssl s_client -servername reelmatch.app -connect reelmatch.app:443 2>/dev/null | openssl x509 -noout -subject -issuer -dates
echo | openssl s_client -servername www.reelmatch.app -connect www.reelmatch.app:443 2>/dev/null | openssl x509 -noout -subject -issuer -dates
```

Both certificates should show:
- **Issuer:** Let's Encrypt (not GitHub/Sectigo)
- **Subject Alternative Name:** Should include both `reelmatch.app` and `www.reelmatch.app`

### Step 4: Test the Configuration

1. Visit `https://reelmatch.app` - should work ✅
2. Visit `https://www.reelmatch.app` - should redirect to `https://reelmatch.app` with a valid certificate ✅
3. No more antivirus warnings! ✅

## Alternative: DNS-Level Redirect (If GitHub Pages doesn't support both)

If GitHub Pages doesn't allow multiple custom domains, you can use NameCheap's URL Redirect:

1. In NameCheap Advanced DNS:
   - Add a **URL Redirect Record**:
     - Host: `www`
     - Value: `https://reelmatch.app`
     - Redirect Type: `301 (Permanent)`

This redirects at the DNS level before SSL handshake, avoiding certificate issues.

## Step-by-Step: NameCheap DNS Configuration

### What to Change in NameCheap:

1. **Log in to NameCheap** → Domain List → reelmatch.app → Manage → Advanced DNS

2. **Delete any A records for `www`** (if you added them based on the previous instructions)

3. **Add a CNAME record for `www`**:
   - Click "Add New Record"
   - Type: **CNAME Record**
   - Host: `www`
   - Value: `digital-space-agency-com.github.io`
   - TTL: Automatic
   - Click Save

4. **Verify your root domain A records exist** (they should already be there):
   - A Record: `@` → `185.199.108.153`
   - A Record: `@` → `185.199.109.153`

5. **Save all changes**

### Expected Result:
After 5-10 minutes, both domains will:
- Resolve to GitHub Pages
- Have valid Let's Encrypt certificates
- No more antivirus warnings!

## Troubleshooting

- **DNS not propagating?** Wait 24-48 hours for full propagation (usually 5-10 minutes)
- **Certificate not updating?** GitHub Pages may take 5-10 minutes to provision certificates after DNS changes
- **Still seeing warnings?** Clear browser cache and try incognito mode
- **Need to check GitHub Pages URL?** Look in repository Settings → Pages → Your site is live at...
- **Can't find the CNAME to delete?** It might be listed as "www" with type "CNAME Record" pointing to "reelmatch.app"

