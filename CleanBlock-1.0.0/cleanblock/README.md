# CleanBlock

A small, privacy-friendly Manifest V3 browser extension that blocks a starter set of common advertising and tracking domains.

## Features

- Blocks common ad/tracker network requests with `declarativeNetRequest`
- One-click enable/disable
- Local blocked-request counter
- No remote servers
- No analytics
- No external JavaScript dependencies

## Install locally

1. Open `chrome://extensions` in Chrome (or the equivalent extensions page in another Chromium browser).
2. Turn on **Developer mode**.
3. Click **Load unpacked**.
4. Select this `cleanblock` folder.
5. Pin CleanBlock from the extensions menu if desired.

## Notes

This is a starter blocklist, not a replacement for a large maintained filter-list project. Websites can use first-party advertising, obfuscation, or other techniques that this small list will not catch.

The extension uses Manifest V3 and Chrome's declarativeNetRequest API.
