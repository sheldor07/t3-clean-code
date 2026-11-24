# Data that leaves your machine

T3 Clean Code is an unofficial fork of T3 Code with the data collection removed. This page lists
what was removed and what still makes network requests.

## Removed

- **Product usage events.** Upstream sends usage events to `ingest.t3.codes`, which keeps a copy
  and forwards them to PostHog. Here the analytics service does nothing: it has no HTTP client and
  no buffer. `T3CODE_TELEMETRY_ENABLED` has no effect on it, in either direction.
- **Account and install identifiers.** Upstream reads `~/.codex/auth.json` and `~/.claude.json`
  and sends hashes of your OpenAI and Claude account ids, your T3 Connect account, and a
  per-device id. The code that reads those files is deleted, and clients no longer attach the
  hashes to their connection.
- **Relay connection traces.** Upstream exports connection traces to Axiom from the server,
  desktop, browser and mobile apps. The exporter is removed for all four.
- **Mobile crash and startup reports.** Never sent. The **Send crash reports** setting is hidden.
- **Google favicon lookups.** Upstream asks Google's favicon service for site icons, which tells
  Google the hostnames you open. This fork shows the fallback icon instead.
- **Agent feedback uploads.** The Labs setting and the report cards still exist, and reports are
  saved on your machine, but nothing is sent. `t3 feedback list` shows what is saved.

## Still makes network requests

- **Your coding agents.** Claude Code, Codex and the other providers talk to their own services
  under their own privacy terms. This fork does not change them.
- **T3 Connect**, if you sign in to it. Remote access and mobile notifications go through
  upstream's relay, which is run by T3 Tools, Inc. and is not end-to-end encrypted. **Publish
  agent activity** sends project and thread titles, model names and status to that relay; turn it
  off under **Settings > Sharing & access**, or do not sign in to T3 Connect.
- **Model list and pricing updates.** The server fetches a model manifest from
  `raw.githubusercontent.com/pingdotgg/t3code` and model prices from the LiteLLM repository on
  GitHub. These are plain downloads that carry no identifier. Turn off provider update checks in
  settings to stop the manifest fetch.
- **App updates**, source-control hosts you connect, and any MCP servers you add.
- **Your own OpenTelemetry receiver**, only if you configure one under
  **Settings > Maintenance > Diagnostics**.
