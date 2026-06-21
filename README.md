# Pake Application Hub

Pake Application Hub is an open-source automation repository that builds and publishes installable desktop wrappers for selected web applications. It is created and maintained by **Yagasaki7K**.

The repository combines GitHub Actions, Pake, and a modern dependency-free single page application so users can browse generated installers from one web catalog.

## Project Overview

This project provides a repeatable release pipeline for web applications that are useful as desktop apps. Each supported application has its own workflow under `.github/workflows` and each workflow builds native installer artifacts for Windows, Linux, and macOS.

Final generated installers are stored in `/projects`. Temporary workflow files are stored in `/artifacts` and are not part of the published application catalog.

## Features

- One GitHub Actions workflow per application.
- Windows `.msi`, Linux `.deb`, macOS `.dmg`, and macOS `.app` output validation.
- Automatic cleanup and replacement of outdated installers for the application being rebuilt.
- GitHub Release publication for generated installers.
- Dependency-free SPA with responsive desktop and mobile design.
- Automatic frontend discovery from `/projects` through a generated manifest.
- Search, platform filters, download buttons, contribution guidance, and project information sections.
- Professional contributor documentation for requesting new applications.

## What is Pake

[Pake](https://github.com/tw93/Pake) is an open-source project that turns web pages into desktop applications with a command-line workflow. The Pake project describes itself as a way to turn any webpage into a desktop app with one command and supports macOS, Windows, and Linux.

Pake is built around the Tauri ecosystem, which uses Rust and native webview capabilities to package web experiences as desktop applications. This repository uses the Pake CLI to wrap public web application URLs into native desktop installers.

## How Pake Works

At a high level, Pake receives a web URL and an application name, creates a desktop application shell for that URL, and builds platform-specific installable outputs. In this repository, every application workflow hardcodes the verified public URL directly in the workflow build command.

Example workflow build command:

```bash
pake "https://chatgpt.com" --name "$APP_NAME"
```

Linux builds explicitly request Debian output:

```bash
pake "https://chatgpt.com" --name "$APP_NAME" --targets deb
```

## Why Pake Is Used

Pake is used because it is designed for packaging websites as lightweight desktop apps. It allows this repository to maintain simple, URL-driven application workflows while still producing native installer artifacts for multiple operating systems.

## Supported Platforms

| Platform | Runner | Output |
| --- | --- | --- |
| Windows | `windows-latest` | `.msi` |
| Linux | `ubuntu-latest` | `.deb` |
| macOS | `macos-latest` | `.dmg` and `.app` |

## Available Applications

The repository includes workflow and metadata entries for the following applications:

- 4chan
- 9GAG
- Ademicon
- Amazon
- AnimeFire
- ChatGPT
- Codex
- Crunchyroll
- DeepSeek
- DevScout
- Discord
- Disney+
- Facebook
- Gemini
- GeoGuessr
- GitHub
- HBO Max
- iLovePDF
- Instagram
- Krea AI
- Manga Livre
- Manga Livre Blog
- Mercado Livre
- Netflix
- Onigiri Hardcore
- Photomosh
- Radio Garden
- Rocketseat
- Shopee
- Spotify
- Twitter / X
- WhatsApp Web
- YouTube

The web catalog only displays applications that have generated installer files in `/projects`.

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

### macOS

1. Download the application `.dmg` file.
2. Open the disk image.
3. Move the app to Applications if prompted.

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
3. Builds macOS `.dmg` and `.app` output on a macOS runner.
4. Uploads temporary build outputs through GitHub Actions artifacts.
5. Downloads those outputs in a publish job.
6. Copies final outputs into `/projects`.
7. Validates required installer types.
8. Commits changed generated installers.
9. Publishes a GitHub Release.

## Release Process

Application workflows are manually runnable with `workflow_dispatch` and also run on a monthly schedule. A successful release job updates `/projects` for the application being built, commits changed generated outputs, and creates a release tagged with the application slug and workflow run number.

Release assets are uploaded from `/projects` using the generated `.msi`, `.deb`, and `.dmg` files.

## Contributing

Contributions are welcome. Keep changes focused, use English comments, and preserve the repository contracts:

- `/projects` is for final generated installers and application bundles.
- `/artifacts` is for temporary workflow output only.
- Application URLs must be hardcoded directly in each workflow.
- Do not add URL-related variables to `.env`.
- Do not create a generic application build workflow.

## Creating New Applications

To request or add a new application:

1. Fork the repository.
2. Create a branch for your change.
3. Verify the public URL for the application.
4. Create a workflow named `build-application-name.yaml`.
5. Use the same structure as the existing application workflows.
6. Add metadata to `public/applications.json`.
7. Open a Pull Request.

Required workflow naming examples:

```text
build-discord.yaml
build-chatgpt.yaml
build-spotify.yaml
```

Required workflow structure:

- `build-windows` job for `.msi` output.
- `build-linux` job for `.deb` output.
- `build-macos` job for `.dmg` and `.app` output.
- `publish` job that validates, commits, and releases outputs.

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
