# App Pake Builder

App Pake Builder is a GitHub Actions based release automation project that builds installable desktop packages from a website URL with Pake. The current workflow builds Discord from `https://discord.com` and stores the generated installers in the repository-level `projects` directory before publishing a GitHub Release.

## What Pake Is

Pake is an open-source command line tool that wraps web applications as lightweight desktop applications. It uses the Tauri ecosystem to package a website in a native shell, which can produce smaller applications than many Electron-based alternatives.

Pake project: <https://github.com/tw93/Pake>

## How Pake Works

Pake receives a website URL and one or more packaging targets. It then creates a native desktop application project, bundles the website into that native container, and emits platform-specific installer artifacts. The exact output format depends on the operating system and selected target.

This repository uses Pake to build these targets:

- Windows MSI installer: `.msi`
- Linux Debian package: `.deb`
- macOS application bundle: `.app`
- macOS disk image: `.dmg`

## Supported Platforms

The automation is designed for GitHub-hosted runners and builds on the native operating system for each package type.

| Platform | Runner | Generated artifact |
| --- | --- | --- |
| Windows | `windows-latest` | `.msi` |
| Linux | `ubuntu-latest` | `.deb` |
| macOS | `macos-latest` | `.app`, `.dmg` |

## How the Workflow Works

The workflow lives at `.github/workflows/build-discord.yml` and runs on pushes to `main` and `master`, manual dispatches, and a scheduled bimonthly run.

The workflow performs the following steps:

1. Checks out the repository with current Node.js 24 compatible GitHub Actions.
2. Installs Node.js 24 on each build runner.
3. Installs `pake-cli` globally with npm.
4. Builds Windows, Linux, and macOS packages in separate jobs.
5. Creates temporary artifact staging directories before collecting files.
6. Validates that each required package type was actually generated.
7. Uploads build artifacts from each operating system job.
8. Downloads all artifacts in the final release job.
9. Creates the repository-level `projects` directory when it does not already exist.
10. Copies `.msi`, `.deb`, `.dmg`, and `.app` outputs into `projects`.
11. Verifies that all required outputs exist before committing or releasing.
12. Commits generated installer changes back to the source branch.
13. Creates a GitHub Release and uploads release assets.

GitHub Release assets are files, so the workflow uploads `.msi`, `.deb`, and `.dmg` files directly. The macOS `.app` bundle is preserved in `projects` as a directory and is also zipped into `release-assets` for GitHub Release upload.

## Installation Instructions

End users can install generated packages from the GitHub Releases page or from the committed files in the `projects` directory after a successful workflow run.

### Windows

1. Download the `.msi` file from the latest release.
2. Open the installer.
3. Follow the Windows installer prompts.

### Linux

1. Download the `.deb` file from the latest release.
2. Install it with apt:

   ```bash
   sudo apt install ./downloaded-file.deb
   ```

### macOS

1. Download the `.dmg` file from the latest release.
2. Open the disk image.
3. Drag the app into the Applications folder if prompted.

Alternatively, download the zipped `.app` release asset, extract it, and move the application bundle into the Applications folder.

## Usage Instructions

After installation, launch the generated desktop application from the operating system application launcher:

- Windows: Start menu
- Linux: Desktop environment application menu
- macOS: Applications folder or Launchpad

The generated application opens the configured web application URL in a native desktop shell.

## Release Process

Releases are automated through GitHub Actions.

A release is produced when one of these events occurs:

- A commit is pushed to `main`.
- A commit is pushed to `master`.
- A maintainer manually runs the workflow from the GitHub Actions tab.
- The scheduled bimonthly workflow run executes.

Each run creates a release tag using the GitHub Actions run number, such as `v123`. Before the release is created, the workflow validates that the expected Windows, Linux, and macOS outputs exist. If Pake fails to generate a required installer type, the workflow fails with diagnostic output instead of publishing an incomplete release.

## Repository Artifacts

Generated installers are copied into the root-level `projects` directory by the final workflow job. Build jobs run on separate GitHub Actions runners, so generated files do not automatically appear in later jobs. The workflow explicitly uploads build outputs as artifacts, downloads them in the final job, and then copies them into `projects`.

The workflow also creates temporary directories named `artifacts` and `release-assets` during CI runs. These directories are used for artifact transfer and release packaging.

## Contributing Guidelines

Contributions are welcome. Please keep changes focused and easy to review.

Recommended contribution workflow:

1. Fork the repository.
2. Create a feature branch.
3. Make and test your changes.
4. Open a pull request with a clear explanation of the problem and solution.

When modifying automation, verify all relevant paths, artifact names, and platform-specific behavior from the repository contents and workflow logs. Avoid assumptions about generated output locations.

## How You Can Help

You can help this project by:

- Reporting build failures with full workflow log details.
- Testing generated installers on Windows, Linux, and macOS.
- Improving release validation and diagnostics.
- Adding support for more Pake targets.
- Improving documentation.
- Reviewing dependency and GitHub Actions updates.

## License

This project is distributed under the MIT License. If a dedicated license file is added later, that file should be treated as the authoritative license text.
