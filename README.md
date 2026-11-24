<p align="center">
  <img src="./assets/prod/t3-black-web-icon-192x192.png" width="80" height="80" alt="T3 Clean Code logo" />
</p>

<h1 align="center">T3 Clean Code</h1>

<p align="center">A control plane for coding agents, with the data collection taken out.</p>

<p align="center">
  <a href="https://github.com/sheldor07/t3-clean-code/releases"><strong>Download</strong></a> ·
  <a href="./docs/user/telemetry.md">What leaves your machine</a> ·
  <a href="./docs/README.md">Docs</a>
</p>

> **Unofficial fork.** T3 Clean Code is built from the source code of
> [T3 Code](https://github.com/pingdotgg/t3code). It is not affiliated with, endorsed by, or
> maintained by T3 Tools, Inc. "T3 Code" and "T3 Connect" are their trademarks; see
> [TRADEMARK.md](./TRADEMARK.md). Report problems with this fork
> [here](https://github.com/sheldor07/t3-clean-code/issues), not upstream.

T3 Clean Code runs the coding agents on your machine and gives them one fast interface. It works with Claude Code, Codex, Cursor, OpenCode, Grok Build, Antigravity, Kiro, Pi, Muse Code, fx, and any [ACP](./docs/user/providers-acp.md) agent. If an agent is set up on your computer, T3 Clean Code can control it.

## What this fork removes

- **Product analytics.** No usage events are sent to `ingest.t3.codes` or PostHog. The analytics service is a no-op with no HTTP client, and no setting or environment variable turns it on.
- **Account fingerprinting.** The server does not read `~/.codex/auth.json` or `~/.claude.json` to derive an identity, and clients do not attach hashed account or device ids when they connect.
- **Relay connection traces.** Nothing is exported to Axiom from the server, desktop, browser or mobile app.
- **Mobile crash and startup reports.** Always off.
- **Google favicon lookups.** Site hostnames are not sent to Google's favicon service.
- **Agent feedback uploads.** Reports are saved on your machine and never sent.
- **Updates from upstream.** The app updates only from this repository's releases, and the server never installs the upstream `t3` package from npm.

[What leaves your machine](./docs/user/telemetry.md) lists what still makes network requests.

## What you get

- **Your subscriptions.** T3 Clean Code does not resell tokens. It drives the agents you are already signed in to.
- **Every agent in one place.** Change models in the middle of a thread. Let Claude hand a task to Codex.
- **Git built in.** Each thread can work in its own worktree. Review the diff, then commit, push, and open a pull request with one button.
- **Its own home.** It keeps its data in `~/.t3-clean` and installs beside T3 Code, so the two never share a database.
- **Open.** Source code is MIT licensed.

## Install

Download an installer from [Releases](https://github.com/sheldor07/t3-clean-code/releases).

| Platform             | File                                |
| -------------------- | ----------------------------------- |
| macOS, Apple silicon | `T3-Clean-Code-<version>-arm64.dmg` |
| macOS, Intel         | `T3-Clean-Code-<version>-x64.dmg`   |
| Linux, x64           | `T3-Clean-Code-x86_64.AppImage`     |
| Debian, Ubuntu, x64  | `T3-Clean-Code-<version>-amd64.deb` |

The installers are not code-signed, so the macOS app may not be able to update itself; if it cannot, download new versions from Releases.

- **macOS:** drag the app to Applications, then run this once before opening it:

  ```bash
  xattr -cr "/Applications/T3 Clean Code (Beta).app"
  ```

- **Linux:** `chmod +x` the AppImage and run it.

### Not available in this fork

- **Windows builds.**
- **Phone apps.** The apps in the App Store and Google Play are upstream's.
- **T3 Connect.** Release builds carry no relay or sign-in configuration, so remote access through T3's relay is off. Local network and Tailscale connections are unchanged from upstream.
- **Remote server installs over SSH or WSL**, and the `t3` command from npm or `t3.codes/install.sh`. Those install upstream T3 Code.

### Sign in to an agent

T3 Clean Code needs one agent that is installed and signed in. For example, install [Claude Code](https://claude.com/product/claude-code) and run `claude auth login`, or install [Codex CLI](https://developers.openai.com/codex/cli) and run `codex login`. [Provider setup](./docs/user/install.md#providers) has the steps for each agent.

## Documentation

The pages under [docs](./docs/README.md) are mostly upstream's and still say "T3 Code". Where they describe downloads, phone apps, T3 Connect or telemetry, this README and [What leaves your machine](./docs/user/telemetry.md) take precedence.

## Building from source

Follow the [development runbook](./docs/operations/00_development.md#first-checkout). Releases are built by the [T3 Clean Code release](./.github/workflows/clean-release.yml) workflow.

## License and trademarks

The source code is licensed under the [MIT License](./LICENSE), copyright T3 Tools Inc. and contributors.

The MIT license covers the source code only. It grants no rights to T3 Tools, Inc.'s trademarks, including the **T3 Code** name, wordmark, logos and application icons. This fork uses its own icon and does not use upstream's logos. See [TRADEMARK.md](./TRADEMARK.md) for upstream's policy.
