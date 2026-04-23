# JavaScript Frontend Development Tools (Homebrew Setup)

This guide installs essential **JavaScript frontend development tools** using **Homebrew** and a **Brewfile**.
It also installs useful **browsers, developer tools, and VS Code extensions** for modern web development.

This setup is ideal for developers working with:

* Vanilla JavaScript
* Node.js
* Bun
* Git & GitHub
* VS Code
* Modern browsers for testing

---

## Prerequisites

Make sure **Homebrew** is installed.

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

After installation run:

```bash
brew update
```

Verify installation:

```bash
brew doctor
brew --version
```

---

## Install Everything with Brewfile

Create a **Brewfile** in your project.

Example:

```ruby
brew "git"
brew "gh"
brew "bun"
brew "node"

cask "kiro-cli"
cask "arc"
cask "firefox"
cask "visual-studio-code"
cask "warp"
cask "microsoft-edge"

vscode "amazonwebservices.codewhisperer-for-command-line-companion"
vscode "xabikos.JavaScriptSnippets"
vscode "christian-kohler.path-intellisense"
vscode "techer.open-in-browser"
vscode "ms-edgedevtools.vscode-edge-devtools"
vscode "ritwickdey.LiveServer"
vscode "ecmel.vscode-html-css"
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
vscode "biomejs.biome"
```

Install everything with:

```bash
brew bundle
```

Homebrew will install:

* CLI tools
* GUI applications
* VS Code extensions

---

## Installed Tools

### Version Control

#### Git

Git is used for source control.

Verify installation:

```bash
git --version
```

Configure Git:

```bash
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
```

Check configuration:

```bash
git config --list
```

---

#### GitHub CLI

GitHub CLI allows interacting with GitHub from the terminal.

Verify installation:

```bash
gh --version
```

Authenticate with GitHub:

```bash
gh auth login
```

Follow the prompts and choose:

```txt
GitHub.com
HTTPS
Login with browser
```

Test authentication:

```bash
gh auth status
```

---

## JavaScript Runtimes

### Node.js

Node.js allows running JavaScript outside the browser.

Verify installation:

```bash
node --version
npm --version
```

Test Node:

```bash
node
```

Example:

```javascript
console.log("Hello from Node")
```

Exit:

```txt
.exit
```

---

### Bun

Bun is a fast JavaScript runtime and package manager.

Verify installation:

```bash
bun --version
```

Test Bun:

```bash
bun init
```

Run a file:

```bash
bun run index.js
```

---

## Browsers for Testing

These browsers are installed for **cross-browser testing**.

### Arc Browser

Modern Chromium-based browser.

Launch:

```bash
open -a Arc
```

---

### Firefox

Useful for debugging and testing standards.

Launch:

```bash
open -a Firefox
```

---

### Microsoft Edge

Provides advanced devtools.

Launch:

```bash
open -a "Microsoft Edge"
```

---

## Development Tools

### Visual Studio Code

Primary code editor.

Verify installation:

```bash
code --version
```

If `code` command is not available:

Open VS Code and run:

```txt
Cmd + Shift + P
Shell Command: Install 'code' command in PATH
```

---

### Warp Terminal

Modern terminal with AI features.

Launch:

```bash
open -a Warp
```

---

### Kiro CLI

Command-line AI development tool.

Verify installation:

```bash
kiro-cli --version
```

---

## VS Code Extensions

The following extensions are automatically installed.

---

### JavaScript Development

#### HavaScript Snippet

```txt
xabikos.JavaScriptSnippets
```

Provides useful JavaScript code snippets.

---

### Bun Extension

```txt
oven.bun-vscode
```

Adds Bun support inside VS Code.

---

### ESLint

```txt
dbaeumer.vscode-eslint
```

Helps detect JavaScript errors.

---

### Prettier

```txt
esbenp.prettier-vscode
```

Formats code automatically.

---

### Biome

```txt
biomejs.biome
```

Fast formatter and linter.

---

### Error Lens

```txt
usernamehw.errorlens
```

Displays errors inline.

---

### GitLens

```txt
eamodio.gitlens
```

Enhances Git capabilities inside VS Code.

---

### Path IntelliSense

```txt
christian-kohler.path-intellisense
```

Auto-completes file paths.

---

### Auto Rename Tag

```txt
formulahendry.auto-rename-tag
```

Automatically renames matching HTML tags.

---

### HTML CSS Support

```txt
ecmel.vscode-html-css
```

CSS autocomplete for HTML files.

---

### CSS Peek

```txt
pranaygp.vscode-css-peek
```

Jump to CSS definitions.

---

### Live Server

```txt
ritwickdey.LiveServer
```

Launches a local development server.

Start server:

1. Open an HTML file
2. Right-click
3. Select **Open with Live Server**

---

### Open in Browser

```txt
techer.open-in-browser
```

Opens files directly in a browser.

---

### Edge DevTools

```txt
ms-edgedevtools.vscode-edge-devtools
```

Debug using Edge DevTools inside VS Code.

---

### GitHub Integration

#### GitHub Pull Requests

```txt
GitHub.vscode-pull-request-github
```

Manage pull requests directly in VS Code.

---

### GitHub Codespaces

```txt
GitHub.codespaces
```

Develop inside GitHub cloud environments.

---

### GitHub Theme

```txt
GitHub.github-vscode-theme
```

GitHub-style editor themes.

---

## Verify Everything

Run the following to confirm installations.

```bash
git --version
gh --version
node --version
bun --version
code --version
```

---

## Updating Tools

Update everything with:

```bash
brew update
brew upgrade
brew upgrade --cask
```

Update VS Code extensions:

```bash
code --list-extensions
```

---

## Uninstall Tools

Remove everything installed via Brewfile:

```bash
brew bundle cleanup --force
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

```bush
bun run dev
```
