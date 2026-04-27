# Development Environment Setup

This repository contains configuration files and setup notes for creating a consistent development environment across Windows, macOS, and Linux machines.

It includes package managers, CLI tools, browsers, Visual Studio Code extensions, and local preview options for HTML, JavaScript, and Vite projects.

---

## 1. Windows Setup

Windows packages are managed with Chocolatey.

The package list is defined in:

```xml
config/choco/choco-packages.config
````

Install all packages with:

```powershell
choco install choco-packages.config
```

Or run:

```powershell
choco install -y --source="'$(pwd)'" choco-packages.config
```

### Example Windows Packages

```text
git
gh
nodejs
firefox
microsoft-edge
visual-studio-code
warp
```

These packages install the core tools required for development, including Git, Node.js, browsers, VS Code, and terminal utilities.

---

## 2. macOS Setup

macOS packages are managed with Homebrew.

The package list is defined in:

```text
config/brew/Brewfile
```

Install everything with:

```bash
brew bundle
```

### CLI Tools

```ruby
brew "git"
brew "gh"
brew "bun"
brew "node"
```

### Applications

```ruby
cask "kiro-cli"
cask "arc"
cask "firefox"
cask "visual-studio-code"
cask "warp"
cask "microsoft-edge"
```

### Homebrew Permissions Issue

If you see an error like this:

```text
The following directories are not writable by your user:
/usr/local/share/man/man8
```

It means some Homebrew directories are owned by `root` instead of your user.

Fix it with:

```bash
sudo chown -R $(whoami) /usr/local/share/man/man8
chmod u+w /usr/local/share/man/man8
```

Then re-run the failed command, for example:

```bash
brew install biome
```

Do not use `sudo` with Homebrew installs.

Correct:

```bash
brew install <package>
```

Incorrect:

```bash
sudo brew install <package>
```

---

## 3. VS Code Extensions

The following Visual Studio Code extensions support JavaScript, HTML, CSS, Git, testing, formatting, browser previewing, and modern frontend development.

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

Install an extension manually with:

```bash
code --install-extension <extension-id>
```

Example:

```bash
code --install-extension dbaeumer.vscode-eslint
```

---

## 4. Previewing Projects in VS Code

There are several ways to preview HTML, JavaScript, and Vite projects during development.

### Option 1: Live Server

For simple static HTML projects, you can use the Live Server extension in VS Code.

You can also run Live Server from the terminal with:

```bash
npx live-server
```

Or with Bun:

```bash
bunx live-server
```

This starts a local development server and gives you a local URL such as:

```text
http://127.0.0.1:8080
```

or:

```text
http://localhost:8080
```

Open that URL in your browser to view the project.

If Bun is installed, you can preview a plain HTML project directly from the terminal:

```bash
bun index.html
```

This starts a local development server and gives you a local URL such as:

```text
http://localhost:3000
```

Open that URL in your browser to view the project.

---

### Option 2: VS Code Live Preview

You can also use the Live Preview extension in VS Code.

This lets you preview your project directly inside VS Code without switching to a separate browser window.

---

### Option 3: Integrated Browser in VS Code

You can use an integrated browser extension inside VS Code.

Start your local server, then paste either:

```text
http://localhost:<port>
```

or the forwarded port URL into the integrated browser.

This is useful when working inside Codespaces, remote environments, or local development servers.

---

### Option 4: GitHub Codespaces Forwarded Ports

When using GitHub Codespaces, your local development server may run on a forwarded port.

For example:

```text
http://localhost:5173
```

or a forwarded Codespaces URL.

Copy the forwarded port URL and open it in your browser or VS Code integrated browser.

---

### Option 5: Arc Browser

Arc can be used as your main browser for previewing local projects.

When you `Cmd + Click` on a local URL in the VS Code terminal, Arc can open the link directly if it is set as your default browser.

Example:

```text
http://localhost:5173
```

Note: Arc is currently in maintenance mode, so it may not receive the same level of active feature development as before.

---

### Option 6: Zen Browser

Zen Browser is a good alternative to Arc.

It has a similar look and feel to Arc, so it can be a good replacement for developers who like Arc’s design and workflow.

---

### Option 7: Microsoft Edge Tools

The Microsoft Edge Tools extension can be used to inspect and debug pages directly from VS Code.

Extension:

```ruby
vscode "ms-edgedevtools.vscode-edge-devtools"
```

However, Microsoft Edge must be installed for this extension to work properly.

This extension can be useful, but it may feel heavy compared to simpler preview options like Live Server, Live Preview, or opening the project directly in a browser.

---

## 5. Using Vite

Vite is recommended for modern frontend development.

### Development Mode

Run Vite in development mode with:

```bash
vite
```

Or, if your project has a script in `package.json`:

```bash
npm run dev
```

Vite usually starts on:

```text
http://localhost:5173
```

Development mode is used while actively building the project.

---

### Production Build

To create a production build, run:

```bash
vite build
```

This creates a `dist/` folder.

To preview the production build, run:

```bash
vite preview
```

Vite preview usually starts on:

```text
http://localhost:4173
```

Important: `vite preview` only works properly after running `vite build`.

Correct order:

```bash
vite build
vite preview
```

---

## 6. Public Folder Paths

When using Vite, files inside the `public/` folder are served from the root URL.

For example, this file:

```text
public/favicon.ico
```

should be referenced like this:

```html
<link rel="icon" href="/favicon.ico">
```

Not like this:

```html
<link rel="icon" href="/public/favicon.ico">
```

Correct Vite examples:

```html
<link rel="icon" href="/favicon.ico">
<link rel="manifest" href="/manifest.webmanifest">
<link rel="apple-touch-icon" href="/apple-icon-180x180.png">
```

---

## 7. Using Bun with a Plain HTML File

If you are serving a plain `index.html` directly using Bun or another simple static server, the path behavior may differ depending on how the server is started.

In some cases, referencing files with `/public/...` may work if the server exposes the project root directly.

Example:

```html
<link rel="icon" href="/public/favicon.ico">
```

However, when using Vite, use root-based paths instead:

```html
<link rel="icon" href="/favicon.ico">
```

For Vite projects, prefer the Vite format.

---

## 8. Recommended Preview Workflow

For simple HTML projects:

```bash
npx live-server
```

or:

```bash
bunx live-server
```

For Vite projects during development:

```bash
npm run dev
```

For testing the production build:

```bash
npm run build
npm run preview
```

or:

```bash
vite build
vite preview
```

---

## 9. Purpose

This setup helps create a consistent development environment with:

* Git and GitHub CLI
* Node.js and Bun
* Modern browsers
* Visual Studio Code
* Essential VS Code extensions
* Local preview tools
* Vite development and production workflows
* Cross-platform setup files for Windows, macOS, and Linux

With these configuration files, a new development machine can be prepared quickly and consistently.
