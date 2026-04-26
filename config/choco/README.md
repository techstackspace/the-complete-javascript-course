# JavaScript Frontend Development Tools (Chocolatey Setup)

This guide installs essential **JavaScript frontend development tools** using **Chocolatey** and a **`choco-packages.config`** file.

It also installs useful **browsers, developer tools, and VS Code extensions** for modern web development.

This setup is ideal for developers working with:

* Vanilla JavaScript
* Node.js
* Bun
* Git & GitHub
* Visual Studio Code
* Modern browsers for testing

---

## Prerequisites

Make sure **Chocolatey** is installed.

Run **PowerShell as Administrator** and install Chocolatey:

```powershell
Set-ExecutionPolicy Bypass -Scope Process -Force; `
[System.Net.ServicePointManager]::SecurityProtocol = `
[System.Net.ServicePointManager]::SecurityProtocol -bor 3072; `
iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

Verify installation:

```powershell
choco --version
```

Update Chocolatey:

```powershell
choco upgrade chocolatey
```

---

## Install Everything with choco-packages.config

Create a **`choco-packages.config`** file.

Example:

```xml
<?xml version="1.0" encoding="utf-8"?>
<packages>

  <!-- CLI Tools -->
  <package id="git" />
  <package id="gh" />
  <package id="bun" />
  <package id="nodejs" />

  <!-- Applications -->
  <package id="firefox" />
  <package id="vscode" />
  <package id="warp-terminal" />
  <package id="microsoft-edge" />

</packages>
```

Install everything with:

```powershell
choco install --install-from-config choco-packages.config -y
```

Chocolatey will install:

* CLI tools
* GUI applications
* development runtimes

---

## Installed Tools

## Version Control

### Git

Git is used for source control.

Verify installation:

```powershell
git --version
```

Configure Git:

```powershell
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
```

Check configuration:

```powershell
git config --list
```

---

### GitHub CLI

GitHub CLI allows interacting with GitHub from the terminal.

Verify installation:

```powershell
gh --version
```

Authenticate with GitHub:

```powershell
gh auth login
```

Choose:

```powershell
GitHub.com
HTTPS
Login with browser
```

Check authentication:

```powershell
gh auth status
```

---

## JavaScript Runtimes

## Node.js

Node.js allows running JavaScript outside the browser.

Verify installation:

```powershell
node --version
npm --version
```

Test Node:

```powershell
node
```

Example:

```javascript
console.log("Hello from Node")
```

Exit:

```powershell
.exit
```

---

## Bun

Bun is a fast JavaScript runtime and package manager.

Verify installation:

```powershell
bun --version
```

Test Bun:

```powershell
bun init
```

Run a file:

```powershell
bun run index.js
```

---

## Browsers for Testing

These browsers are installed for **cross-browser testing**.

## Arc Browser

Modern Chromium-based browser.

Launch:

```powershell
start arc
```

---

## Firefox

Launch:

```powershell
start firefox
```

---

## Microsoft Edge

Launch:

```powershell
start msedge
```

---

## Development Tools

## Visual Studio Code

Visual Studio Code is the primary code editor.

Verify installation:

```powershell
code --version
```

If the `code` command is unavailable:

1. Open VS Code
2. Press **Ctrl + Shift + P**
3. Run:

```powershell
Shell Command: Install 'code' command in PATH
```

---

## Warp Terminal

Modern terminal with AI capabilities.

Launch:

```powershell
warp
```

---

## VS Code Extensions

VS Code extensions are installed **separately** using the `code` command.

Install them with:

```powershell
code --install-extension xabikos.JavaScriptSnippets
code --install-extension christian-kohler.path-intellisense
code --install-extension techer.open-in-browser
code --install-extension ms-edgedevtools.vscode-edge-devtools
code --install-extension Orta.vscode-jest
code --install-extension Postman.postman-for-vscode
code --install-extension firsttris.vscode-jest-runner
code --install-extension firefox-devtools.vscode-firefox-debug
code --install-extension rangav.vscode-thunder-client
code --install-extension bradlc.vscode-tailwindcss
code --install-extension christian-kohler.path-intellisense
code --install-extension ms-kubernetes-tools.vscode-kubernetes-tools
code --install-extension ritwickdey.LiveServer
code --install-extension ecmel.vscode-html-css
code --install-extension formulahendry.auto-rename-tag
code --install-extension GitHub.codespaces
code --install-extension GitHub.github-vscode-theme
code --install-extension openai.chatgpt
code --install-extension ms-vscode.live-server
code --install-extension Anthropic.claude-code
code --install-extension pranaygp.vscode-css-peek
code --install-extension dbaeumer.vscode-eslint
code --install-extension ms-vscode-remote.vscode-remote-extensionpack
code --install-extension GitHub.vscode-pull-request-github
code --install-extension rvest.vs-code-prettier-eslint
code --install-extension oven.bun-vscode
code --install-extension esbenp.prettier-vscode
code --install-extension usernamehw.errorlens
code --install-extension eamodio.gitlens
```

---

## Verify Everything

Run the following:

```powershell
git --version
gh --version
node --version
bun --version
code --version
```

---

## Updating Tools

Update everything with:

```powershell
choco upgrade all -y
```

Update VS Code extensions:

```powershell
code --list-extensions
```

---

## Uninstall Tools

Remove packages from Chocolatey:

```powershell
choco uninstall git gh bun nodejs -y
```

---

## Recommended Workflow

Typical development workflow:

```bash
git clone repo
cd project
bun install
code .
```

Run development server:

```powershell
bun run dev
```

> If, after running `choco install choco-packages.config -y`, some packages fail to install, try installing them individually (e.g., `choco install nvm -y`). If a package still doesn't install completely, you can use `choco install <package-name> --force -y`, download it directly from the package's website, or use `winget` — Windows' default package manager available in Windows 10, 11 and later.
