# Development Environment Setup

This repository contains configuration files to quickly set up a complete development environment across machines.

## Windows Setup (Chocolatey)

Packages for Windows are defined in:

```xml
choco-packages.config
```

Install all packages using Chocolatey:

```powershell
choco install choco-packages.config
```

or

```powershell
choco install -y --source="'$(pwd)'" choco-packages.config
```

Example packages installed via Chocolatey:

* git
* gh
* nodejs
* firefox
* microsoft-edge
* visual-studio-code
* warp

These packages will automatically install the core CLI tools and applications required for development.

---

## macOS Setup (Homebrew)

For macOS systems, the environment can be recreated using a **Brewfile**.

## CLI Tools

```ruby
brew "git"
brew "gh"
brew "bun"
brew "node"
```

## Applications

```ruby
cask "kiro-cli"
cask "arc"
cask "firefox"
cask "visual-studio-code"
cask "warp"
cask "microsoft-edge"
```

Install everything with:

```ruby
brew bundle
```

> **Note (Homebrew Permissions Issue)**
>
> If you encounter an error like:
>
> ```text
> The following directories are not writable by your user:
> /usr/local/share/man/man8
> ```
>
> This is a permission issue caused by some directories being owned by `root` instead of your user.
>
> Fix it by running:
>
> ```bash
> sudo chown -R $(whoami) /usr/local/share/man/man8
> chmod u+w /usr/local/share/man/man8
> ```
>
> After that, re-run:
>
> ```bash
> brew install biome
> ```
>
> **Important:** Never use `sudo` with Homebrew installs. Always run:
>
> ```bash
> brew install <package>
> ```
>
> instead of:
>
> ```bash
> sudo brew install <package>
> ```

---

## VS Code Extensions

The following Visual Studio Code extensions are installed to support JavaScript, web development, and Git workflows.

```ruby
vscode "xabikos.JavaScriptSnippets"
vscode "christian-kohler.path-intellisense"
vscode "techer.open-in-browser"
vscode "ms-edgedevtools.vscode-edge-devtools"
vscode "ritwickdey.LiveServer"
vscode "ecmel.vscode-html-css"
vscode "rangav.vscode-thunder-client"
vscode "Orta.vscode-jest"
vscode "firsttris.vscode-jest-runner"
vscode "bradlc.vscode-tailwindcss"
vscode "christian-kohler.path-intellisense"
vscode "formulahendry.auto-rename-tag"
vscode "GitHub.codespaces"
vscode "GitHub.github-vscode-theme"
vscode "pranaygp.vscode-css-peek"
vscode "dbaeumer.vscode-eslint"
vscode "GitHub.vscode-pull-request-github"
vscode "rvest.vs-code-prettier-eslint"
vscode "oven.bun-vscode"
vscode "esbenp.prettier-vscode"
vscode "usernamehw.errorlens"
vscode "eamodio.gitlens"
```

Install extensions manually if needed:

```bash
code --install-extension <extension-id>
```

Example:

```bash
code --install-extension dbaeumer.vscode-eslint
```

---

## Purpose

This setup ensures a consistent development environment including:

* Git and GitHub CLI
* Node.js and Bun
* Modern browsers
* Visual Studio Code
* Essential developer extensions

With these configuration files, a new development machine can be fully set up in minutes.
