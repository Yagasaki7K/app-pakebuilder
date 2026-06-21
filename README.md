<p align="center">
    <img src=https://gw.alipayobjects.com/zos/k/fa/logo-modified.png width=138/>
</p>
<h1 align="center">Pake Application Hub</h1>
<p align="center"><strong>Turn any webpage into a desktop app with Github Actions via Pake, supports Windows and Linux</strong></p>

Pake Application Hub is an open-source automation repository that builds and publishes installable desktop wrappers for selected web applications. It is created and maintained by **Yagasaki7K**.

The repository combines GitHub Actions and Pake.

## Project Overview

This project provides a repeatable release pipeline for web applications that are useful as desktop apps. Each supported application has its own workflow under `.github/workflows` and each workflow builds native installer artifacts for Windows and Linux.

Final generated installers are stored in `/projects`. Temporary workflow files are stored in `/artifacts` and are not part of the published application catalog.

## Features

- One GitHub Actions workflow per application.
- Windows `.msi` and Linux `.deb` output validation.
- Automatic cleanup and replacement of outdated installers for the application being rebuilt.
- GitHub Release publication for generated installers.
- Dependency-free SPA with responsive desktop and mobile design.
- Automatic frontend discovery from `/projects` through a generated manifest.
- Search, platform filters, download buttons, contribution guidance, and project information sections.
- Professional contributor documentation for requesting new applications.

## What is Pake

[Pake](https://github.com/tw93/Pake) is an open-source project that turns web pages into desktop applications with a command-line workflow. The Pake project describes itself as a way to turn any webpage into a desktop app with one command and supports Windows and Linux.

Pake is built around the Tauri ecosystem, which uses Rust and native webview capabilities to package web experiences as desktop applications. This repository uses the Pake CLI to wrap public web application URLs into native desktop installers.

## How Pake Works

At a high level, Pake receives a web URL and an application name, creates a desktop application shell for that URL, and builds platform-specific installable outputs. In this repository, every application workflow hardcodes the verified public URL directly in the workflow build command.

Example workflow build command:

```bash
pake "https://chatgpt.com" --name "ChatGPT"
```

Linux builds explicitly request Debian output:

```bash
pake "https://chatgpt.com" --name "ChatGPT" --targets deb
```

## Why Pake Is Used

Pake is used because it is designed for packaging websites as lightweight desktop apps. It allows this repository to maintain simple, URL-driven application workflows while still producing native installer artifacts for multiple operating systems.

## Supported Platforms

| Platform | Runner | Output |
| --- | --- | --- |
| Windows | `windows-latest` | `.msi` |
| Linux | `ubuntu-latest` | `.deb` |

## Available Applications

The repository includes workflow and metadata entries for the following applications:

## Windows (.msi)
- [4chan (Windows)](https://github.com/Yagasaki7K/app-pakebuilder/raw/refs/heads/main/projects/4chan.msi)
- [9GAG (Windows)](https://github.com/Yagasaki7K/app-pakebuilder/raw/refs/heads/main/projects/9gag.msi)
- [Ademicon (Windows)](https://github.com/Yagasaki7K/app-pakebuilder/raw/refs/heads/main/projects/ademicon.msi)
- [Amazon (Windows)](https://github.com/Yagasaki7K/app-pakebuilder/raw/refs/heads/main/projects/amazon.msi)
- [AnimeFire (Windows)](https://github.com/Yagasaki7K/app-pakebuilder/raw/refs/heads/main/projects/animefire.msi)
- [ChatGPT (Windows)](https://github.com/Yagasaki7K/app-pakebuilder/raw/refs/heads/main/projects/chatgpt.msi)
- [Codex (Windows)](https://github.com/Yagasaki7K/app-pakebuilder/raw/refs/heads/main/projects/codex.msi)
- [DevScout (Windows)](https://github.com/Yagasaki7K/app-pakebuilder/raw/refs/heads/main/projects/devscout.msi)
- [Discord (Windows)](https://github.com/Yagasaki7K/app-pakebuilder/raw/refs/heads/main/projects/discord.msi)
- [Crunchyroll (Windows)](https://github.com/Yagasaki7K/app-pakebuilder/raw/refs/heads/main/projects/crunchyroll.msi)
- [DeepSeek (Windows)](https://github.com/Yagasaki7K/app-pakebuilder/raw/refs/heads/main/projects/deepseek.msi)
- [Disney+ (Windows)](https://github.com/Yagasaki7K/app-pakebuilder/raw/refs/heads/main/projects/disney-plus.msi)
- [Facebook (Windows)](https://github.com/Yagasaki7K/app-pakebuilder/raw/refs/heads/main/projects/facebook.msi)
- [Gemini (Windows)](https://github.com/Yagasaki7K/app-pakebuilder/raw/refs/heads/main/projects/gemini.msi)
- [GeoGuessr (Windows)](https://github.com/Yagasaki7K/app-pakebuilder/raw/refs/heads/main/projects/geoguessr.msi)
- [GitHub (Windows)](https://github.com/Yagasaki7K/app-pakebuilder/raw/refs/heads/main/projects/github.msi)
- [HBO Max (Windows)](https://github.com/Yagasaki7K/app-pakebuilder/raw/refs/heads/main/projects/hbo-max.msi)
- [iLovePDF (Windows)](https://github.com/Yagasaki7K/app-pakebuilder/raw/refs/heads/main/projects/ilovepdf.msi)
- [Instagram (Windows)](https://github.com/Yagasaki7K/app-pakebuilder/raw/refs/heads/main/projects/instagram.msi)
- [Krea AI (Windows)](https://github.com/Yagasaki7K/app-pakebuilder/raw/refs/heads/main/projects/krea-ai.msi)
- [Manga Livre (Windows)](https://github.com/Yagasaki7K/app-pakebuilder/raw/refs/heads/main/projects/manga-livre.msi)
- [Manga Livre Blog (Windows)](https://github.com/Yagasaki7K/app-pakebuilder/raw/refs/heads/main/projects/manga-livre-blog.msi)
- [Mercado Livre (Windows)](https://github.com/Yagasaki7K/app-pakebuilder/raw/refs/heads/main/projects/mercado-livre.msi)
- [Netflix (Windows)](https://github.com/Yagasaki7K/app-pakebuilder/raw/refs/heads/main/projects/netflix.msi)
- [Onigiri Hardcore (Windows)](https://github.com/Yagasaki7K/app-pakebuilder/raw/refs/heads/main/projects/onigiri-hardcore.msi)
- [Rocketseat (Windows)](https://github.com/Yagasaki7K/app-pakebuilder/raw/refs/heads/main/projects/rocketseat.msi)
- [Photomosh (Windows)](https://github.com/Yagasaki7K/app-pakebuilder/raw/refs/heads/main/projects/photomosh.msi)
- [Radio Garden (Windows)](https://github.com/Yagasaki7K/app-pakebuilder/raw/refs/heads/main/projects/radio-garden.msi)
- [Shopee (Windows)](https://github.com/Yagasaki7K/app-pakebuilder/raw/refs/heads/main/projects/shopee.msi)
- [Spotify (Windows)](https://github.com/Yagasaki7K/app-pakebuilder/raw/refs/heads/main/projects/spotify.msi)
- [Twitter / X (Windows)](https://github.com/Yagasaki7K/app-pakebuilder/raw/refs/heads/main/projects/x.msi)
- [Web Essentials by Yagasaki7K (Windows)](https://github.com/Yagasaki7K/app-pakebuilder/raw/refs/heads/main/projects/web-essentials.msi)
- [WhatsApp Web (Windows)](https://github.com/Yagasaki7K/app-pakebuilder/raw/refs/heads/main/projects/whatsapp-web.msi)
- [YouTube (Windows)](https://github.com/Yagasaki7K/app-pakebuilder/raw/refs/heads/main/projects/youtube.msi)

## Linux (.deb)
- [4chan (Deb Linux)](https://github.com/Yagasaki7K/app-pakebuilder/raw/refs/heads/main/projects/4chan.deb)
- [9GAG (Deb Linux)](https://github.com/Yagasaki7K/app-pakebuilder/raw/refs/heads/main/projects/9gag.deb)
- [Ademicon (Deb Linux)](https://github.com/Yagasaki7K/app-pakebuilder/raw/refs/heads/main/projects/ademicon.deb)
- [Amazon (Deb Linux)](https://github.com/Yagasaki7K/app-pakebuilder/raw/refs/heads/main/projects/amazon.deb)
- [AnimeFire (Deb Linux)](https://github.com/Yagasaki7K/app-pakebuilder/raw/refs/heads/main/projects/animefire.deb)
- [ChatGPT (Deb Linux)](https://github.com/Yagasaki7K/app-pakebuilder/raw/refs/heads/main/projects/chatgpt.deb)
- [Codex (Deb Linux)](https://github.com/Yagasaki7K/app-pakebuilder/raw/refs/heads/main/projects/codex.deb)
- [Crunchyroll (Deb Linux)](https://github.com/Yagasaki7K/app-pakebuilder/raw/refs/heads/main/projects/crunchyroll.deb)
- [DeepSeek (Deb Linux)](https://github.com/Yagasaki7K/app-pakebuilder/raw/refs/heads/main/projects/deepseek.deb)
- [DevScout (Deb Linux)](https://github.com/Yagasaki7K/app-pakebuilder/raw/refs/heads/main/projects/devscout.deb)
- [Discord (Deb Linux)](https://github.com/Yagasaki7K/app-pakebuilder/raw/refs/heads/main/projects/discord.deb)
- [Disney+ (Deb Linux)](https://github.com/Yagasaki7K/app-pakebuilder/raw/refs/heads/main/projects/disney-plus.deb)
- [Facebook (Deb Linux)](https://github.com/Yagasaki7K/app-pakebuilder/raw/refs/heads/main/projects/facebook.deb)
- [Gemini (Deb Linux)](https://github.com/Yagasaki7K/app-pakebuilder/raw/refs/heads/main/projects/gemini.deb)
- [GeoGuessr (Deb Linux)](https://github.com/Yagasaki7K/app-pakebuilder/raw/refs/heads/main/projects/geoguessr.deb)
- [GitHub (Deb Linux)](https://github.com/Yagasaki7K/app-pakebuilder/raw/refs/heads/main/projects/github.deb)
- [HBO Max (Deb Linux)](https://github.com/Yagasaki7K/app-pakebuilder/raw/refs/heads/main/projects/hbo-max.deb)
- [iLovePDF (Deb Linux)](https://github.com/Yagasaki7K/app-pakebuilder/raw/refs/heads/main/projects/ilovepdf.deb)
- [Instagram (Deb Linux)](https://github.com/Yagasaki7K/app-pakebuilder/raw/refs/heads/main/projects/instagram.deb)
- [Krea AI (Deb Linux)](https://github.com/Yagasaki7K/app-pakebuilder/raw/refs/heads/main/projects/krea-ai.deb)
- [Manga Livre (Deb Linux)](https://github.com/Yagasaki7K/app-pakebuilder/raw/refs/heads/main/projects/manga-livre.deb)
- [Manga Livre Blog (Deb Linux)](https://github.com/Yagasaki7K/app-pakebuilder/raw/refs/heads/main/projects/manga-livre-blog.deb)
- [Mercado Livre (Deb Linux)](https://github.com/Yagasaki7K/app-pakebuilder/raw/refs/heads/main/projects/mercado-livre.deb)
- [Netflix (Deb Linux)](https://github.com/Yagasaki7K/app-pakebuilder/raw/refs/heads/main/projects/netflix.deb)
- [Onigiri Hardcore (Deb Linux)](https://github.com/Yagasaki7K/app-pakebuilder/raw/refs/heads/main/projects/onigiri-hardcore.deb)
- [Photomosh (Deb Linux)](https://github.com/Yagasaki7K/app-pakebuilder/raw/refs/heads/main/projects/photomosh.deb)
- [Radio Garden (Deb Linux)](https://github.com/Yagasaki7K/app-pakebuilder/raw/refs/heads/main/projects/radio-garden.deb)
- [Rocketseat (Deb Linux)](https://github.com/Yagasaki7K/app-pakebuilder/raw/refs/heads/main/projects/rocketseat.deb)
- [Shopee (Deb Linux)](https://github.com/Yagasaki7K/app-pakebuilder/raw/refs/heads/main/projects/shopee.deb)
- [Spotify (Deb Linux)](https://github.com/Yagasaki7K/app-pakebuilder/raw/refs/heads/main/projects/spotify.deb)
- [Twitter / X (Deb Linux)](https://github.com/Yagasaki7K/app-pakebuilder/raw/refs/heads/main/projects/x.deb)
- [Web Essentials by Yagasaki7K (Deb Linux)](https://github.com/Yagasaki7K/app-pakebuilder/raw/refs/heads/main/projects/web-essentials.deb)
- [WhatsApp Web (Deb Linux)](https://github.com/Yagasaki7K/app-pakebuilder/raw/refs/heads/main/projects/whatsapp-web.deb)
- [YouTube (Deb Linux)](https://github.com/Yagasaki7K/app-pakebuilder/raw/refs/heads/main/projects/youtube.deb)

The web catalog only displays applications that have generated installer files in `/projects` or you can see better [in projects.md](./projects.md).

## Installation

End users can download generated installers from the SPA catalog or from GitHub Releases after workflows have produced artifacts.

### Windows

1. Download the application `.msi` file.
2. Open the installer.
3. Follow the Windows installation prompts.

### Linux

1. Download the application `.deb` file.
2. Install it with apt:

```bash
sudo apt install ./application.deb
```

## Local Development

Install dependencies:

```bash
npm install
```

Generate the local projects manifest:

```bash
node scripts/generate-projects-manifest.mjs
```

Run the SPA locally:

```bash
npm run dev
```

## Running the Web Version

The web version is a dependency-free SPA served by the repository's Node.js development server. During startup and production builds, it reads `public/projects-manifest.json`, which is generated from the contents of `/projects`.

If `/projects` has no installer files, the SPA still runs and shows an empty-state message explaining that workflows must generate installers first.

## Building the Frontend

Build the production frontend:

```bash
npm run build
```

The build command first runs `scripts/generate-projects-manifest.mjs`, then creates the static site in `dist`.

## GitHub Actions Overview

Each application has its own workflow named with this pattern:

```text
build-application-name.yaml
```

Examples:

```text
build-discord.yaml
build-chatgpt.yaml
build-spotify.yaml
```

Each workflow:

1. Builds Windows `.msi` output on a Windows runner.
2. Builds Linux `.deb` output on an Ubuntu runner.
3. Uploads temporary build outputs through GitHub Actions artifacts.
4. Downloads those outputs in a publish job.
5. Copies final outputs into `/projects`.
6. Validates required installer types.
7. Commits changed generated installers.
8. Publishes a GitHub Release.

## Workflow Validation

This repository includes validation utilities for release maintenance:

```bash
npm run audit:workflows
npm run test:artifact-flow
npm test
```

The workflow audit checks every application workflow for hardcoded URLs and Pake project names, verifies that Pake is installed with npm instead of pnpm, and confirms that upload, download, validation, and release steps reference valid repository scripts. The artifact-flow test simulates generated installer files, collects them through the same shell scripts used in CI, copies them into `/projects`, and validates that temporary files remain under `/artifacts`.

## Release Process

Application workflows are manually runnable with `workflow_dispatch` and also run on a monthly schedule. A successful release job updates `/projects` for the application being built, commits changed generated outputs, and creates a release tagged with the application slug and workflow run number.

Release assets are uploaded from `/projects` using the generated `.msi`, `.deb`, and `.dmg` files.

## Contributing

Contributions are welcome. Keep changes focused, use English comments, and preserve the repository contracts:

- `/projects` is for final generated installers and application bundles.
- `/artifacts` is for temporary workflow output only.
- Application URLs and Pake project names must be hardcoded directly in each workflow.
- Do not add URL-related or application-name variables to `.env` or workflow-level application variables.
- Do not create a generic application build workflow.

## Creating New Applications

To request or add a new application:

1. Fork the repository.
2. Create a branch for your change.
3. Verify the public URL for the application.
4. Create a workflow named `build-application-name.yaml`.
5. Use the same structure as the existing application workflows.
6. Install Pake CLI with `npm install --global pake-cli` in the workflow.
7. Add metadata to `public/applications.json`.
8. Run `npm test` locally.
9. Open a Pull Request.

Required workflow naming examples:

```text
build-discord.yaml
build-chatgpt.yaml
build-spotify.yaml
```

Required workflow structure:

- `build-windows` job for `.msi` output.
- `build-linux` job for `.deb` output.
- `publish` job that validates, commits, and releases outputs.
- No `APP_NAME`, `APP_URL`, `PNPM_HOME`, or `pnpm install -g` usage.

## Pull Request Guidelines

A Pull Request should include:

- The application name.
- The verified public URL.
- The new workflow path.
- Any metadata changes.
- Validation commands and results.
- A clear explanation of why the application is useful as a Pake desktop app.

## License

This project is licensed under the MIT License. See [`LICENSE`](LICENSE) for details.

## Credits

- Created and maintained by **Yagasaki7K**.
- Built with [Pake](https://github.com/tw93/Pake).
- Frontend powered by modern browser APIs and Node.js build scripts.
- Automation powered by GitHub Actions.
