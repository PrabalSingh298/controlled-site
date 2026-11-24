# Controlled IPv6 Readiness Test Site

This directory contains a simple static website for local IPv4/IPv6 readiness
testing. It does not change Windows networking or firewall configuration.

## Run on Windows

From the project root:

```powershell
py -m http.server 8080 --directory controlled_site
```

Open <http://127.0.0.1:8080/>.

## IPv4-only external resources

Both resources below use the `ipv4.google.com` host:

| Resource | URL | Evidence |
|---|---|---|
| JavaScript | `https://ipv4.google.com/complete/search?client=chrome&q=ipv6&callback=window.ipv4GoogleResource` | The host uses only A DNS records and returns `text/javascript` for this callback request. |
| Image | `https://ipv4.google.com/favicon.ico` | The host uses only A DNS records and returns `image/x-icon`. |

DNS and origin routing can change. Recheck A/AAAA records before a controlled
measurement instead of assuming these endpoints remain IPv4-only.

## Ordinary local resources

- `css/site.css`
- `js/interactions.js`
- `js/site.js`
- `assets/network-card.svg`
- `assets/status.svg`

The page functions normally with IPv4 connectivity. Browser resource and peer
address evidence should come from the project's existing measurement tooling.
