# JavaScript Development Tools (Linux Setup)

This guide provides a complete setup for a JavaScript development environment on Linux.

It supports both:

- **native package managers** such as APT, DNF, Pacman, Zypper, and APK
- **cross-distribution package managers** such as **Snap** and **Flatpak**

This setup is useful for:

- JavaScript development
- Node.js and Bun
- Git and GitHub
- Visual Studio Code
- modern browsers for testing
- CLI developer utilities

This approach helps you maintain a more consistent development environment across Linux distributions.

---

## 1. Prerequisites

Ensure your system has `sudo` privileges:

```bash
sudo -v
````

Update system packages first.

### Ubuntu / Debian / Linux Mint

```bash
sudo apt update && sudo apt upgrade -y
```

### Fedora

```bash
sudo dnf upgrade --refresh -y
```

### Arch Linux / Manjaro

```bash
sudo pacman -Syu
```

### openSUSE

```bash
sudo zypper refresh && sudo zypper update -y
```

### Alpine

```bash
sudo apk update && sudo apk upgrade
```

---

## 2. Detect Your Linux Distribution

Different Linux distributions use different package managers.

| Distribution                 | Package Manager |
| ---------------------------- | --------------- |
| Ubuntu / Debian / Linux Mint | `apt`           |
| Fedora                       | `dnf`           |
| Arch / Manjaro               | `pacman`        |
| openSUSE                     | `zypper`        |
| Alpine                       | `apk`           |

Detect your distribution with:

```bash
source /etc/os-release

echo "Detected distribution: $NAME"
echo "ID: $ID"
```

---

## 3. Automatic Installation Script

You can create a script to install common development tools across multiple Linux distributions.

Create the file:

```bash
touch linux-packages.sh
```

Example script:

```bash
#!/usr/bin/env bash

set -e
source /etc/os-release

echo "Detected Linux distribution: $NAME"

install_pkg() {
  PKG=$1

  case $ID in
    ubuntu|debian|linuxmint)
      if ! dpkg -s "$PKG" >/dev/null 2>&1; then
        sudo apt install -y "$PKG"
      else
        echo "$PKG already installed"
      fi
      ;;

    fedora)
      if ! rpm -q "$PKG" >/dev/null 2>&1; then
        sudo dnf install -y "$PKG"
      else
        echo "$PKG already installed"
      fi
      ;;

    arch|manjaro)
      if ! pacman -Qi "$PKG" >/dev/null 2>&1; then
        sudo pacman -S --noconfirm "$PKG"
      else
        echo "$PKG already installed"
      fi
      ;;

    opensuse*|sles)
      if ! rpm -q "$PKG" >/dev/null 2>&1; then
        sudo zypper install -y "$PKG"
      else
        echo "$PKG already installed"
      fi
      ;;

    alpine)
      if ! apk info "$PKG" >/dev/null 2>&1; then
        sudo apk add "$PKG"
      else
        echo "$PKG already installed"
      fi
      ;;

    *)
      echo "Unsupported distribution: $ID"
      exit 1
      ;;
  esac
}

echo "Installing CLI tools..."

install_pkg git
install_pkg curl
install_pkg wget

echo "Installation complete."
```

Make it executable:

```bash
chmod +x linux-packages.sh
```

Run it:

```bash
./linux-packages.sh
```

---

## 4. Native Package Manager Package Lists

Instead of installing packages one by one, you can define them in text files.

### APT package list

Create `apt-packages.txt`:

```txt
git
curl
wget
nodejs
npm
build-essential
firefox
```

Install them with:

```bash
sudo apt update
sudo apt install -y $(cat apt-packages.txt)
```

### DNF package list

Create `dnf-packages.txt`:

```txt
git
curl
wget
nodejs
npm
gcc
firefox
```

Install with:

```bash
sudo dnf install -y $(cat dnf-packages.txt)
```

### Pacman package list

Create `pacman-packages.txt`:

```txt
git
curl
wget
nodejs
npm
base-devel
firefox
```

Install with:

```bash
sudo pacman -S --needed - < pacman-packages.txt
```

---

## 5. Cross-Distribution Package Managers

Some applications are easier to install with universal Linux package managers.

### 5.1 Snap setup

Snap packages are maintained by Canonical.

#### Ubuntu / Debian

```bash
sudo apt install snapd -y
sudo systemctl enable --now snapd
```

#### Fedora (installation via `dnf`)

```bash
sudo dnf install snapd -y
sudo ln -s /var/lib/snapd/snap /snap
```

#### Arch

```bash
sudo pacman -S snapd
sudo systemctl enable --now snapd.socket
```

Verify Snap:

```bash
snap version
```

Create `snap-packages.txt`:

```txt
# CLI tools
gh --classic
node --classic
curl

# Applications
firefox
code --classic
postman
zen-browser-snap --channel=candidate
```

Install all Snap packages:

```bash
while IFS= read -r pkg; do
  [[ "$pkg" =~ ^#.*$ || -z "$pkg" ]] && continue
  sudo snap install $pkg
done < snap-packages.txt
```

Remove all Snap packages from the list:

```bash
while IFS= read -r pkg; do
  [[ "$pkg" =~ ^#.*$ || -z "$pkg" ]] && continue
  sudo snap remove ${pkg%% *}
done < snap-packages.txt
```

### 5.2 Flatpak setup

Flatpak is maintained by the Flatpak project.

#### Ubuntu / Debian (via `apt`)

```bash
sudo apt install flatpak -y
```

#### Fedora (via `dnf`)

```bash
sudo dnf install flatpak -y
```

#### Arch (via `pacman`)

```bash
sudo pacman -S flatpak
```

Add Flathub:

```bash
flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo
```

Create `flatpak-packages.txt`:

```txt
org.mozilla.firefox
com.visualstudio.code
com.microsoft.Edge
app.zen_browser.zen
```

Install Flatpak packages:

```bash
while IFS= read -r pkg; do
  [[ "$pkg" =~ ^#.*$ || -z "$pkg" ]] && continue
  flatpak install -y flathub "$pkg"
done < flatpak-packages.txt
```

Remove Flatpak packages:

```bash
while IFS= read -r pkg; do
  [[ "$pkg" =~ ^#.*$ || -z "$pkg" ]] && continue
  flatpak uninstall -y "$pkg"
done < flatpak-packages.txt
```

---

## 6. CLI Development Tools

### Git

Verify installation:

```bash
git --version
```

Configure Git:

```bash
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
```

### GitHub CLI

Install with your distro package manager where available.

#### Ubuntu / Debian (Installation via `apt`)

```bash
sudo apt install gh -y
```

#### Fedora (Installation via `dnf`)

```bash
sudo dnf install gh -y
```

#### Arch (Installation via `pacman`)

```bash
sudo pacman -S github-cli
```

Verify installation:

```bash
gh --version
```

Authenticate:

```bash
gh auth login
```

---

## 7. JavaScript Runtimes

### Node.js

Install with your native package manager.

#### Ubuntu / Debian (`apk` packages installation)

```bash
sudo apt install nodejs npm -y
```

#### Fedora (`dnf` packages installation)

```bash
sudo dnf install nodejs -y
```

#### Arch (`pacman` packages installation)

```bash
sudo pacman -S nodejs npm
```

Verify:

```bash
node --version
npm --version
```

### Bun

Install Bun:

```bash
curl -fsSL https://bun.sh/install | bash
```

Verify:

```bash
bun --version
```

---

## 8. Development Tools

### Visual Studio Code

Install with Snap:

```bash
sudo snap install code --classic
```

Or install with Flatpak:

```bash
flatpak install flathub com.visualstudio.code
```

Verify:

```bash
code --version
```

---

## 9. VS Code Extensions

Install common frontend extensions:

```bash
code --install-extension xabikos.JavaScriptSnippets
code --install-extension christian-kohler.path-intellisense
code --install-extension techer.open-in-browser
code --install-extension ms-edgedevtools.vscode-edge-devtools
code --install-extension bradlc.vscode-tailwindcss
code --install-extension ritwickdey.LiveServer
code --install-extension ecmel.vscode-html-css
code --install-extension formulahendry.auto-rename-tag
code --install-extension GitHub.codespaces
code --install-extension GitHub.github-vscode-theme
code --install-extension pranaygp.vscode-css-peek
code --install-extension dbaeumer.vscode-eslint
code --install-extension GitHub.vscode-pull-request-github
code --install-extension rvest.vs-code-prettier-eslint
code --install-extension oven.bun-vscode
code --install-extension esbenp.prettier-vscode
code --install-extension usernamehw.errorlens
code --install-extension eamodio.gitlens
```

---

## 10. Browsers for Testing

### Firefox

Install with Snap:

```bash
sudo snap install firefox
```

Or with Flatpak:

```bash
flatpak install flathub org.mozilla.firefox
```

### Microsoft Edge

Install with Flatpak:

```bash
flatpak install flathub com.microsoft.Edge
```

### Zen Browser

Install with Flatpak:

```bash
flatpak install flathub app.zen_browser.zen
```

Or with Snap:

```bash
sudo snap install zen-browser-snap --channel=candidate
```

---

## 11. Verify Installation

Run the following commands:

```bash
git --version
gh --version
node --version
bun --version
code --version
```

---

## 12. Updating Tools

Update native packages first.

### Ubuntu / Debian (update apt)

```bash
sudo apt update && sudo apt upgrade -y
```

### Fedora (upgrade dnf)

```bash
sudo dnf upgrade -y
```

### Arch (update pacman)

```bash
sudo pacman -Syu
```

Update Flatpak apps:

```bash
flatpak update
```

Update Snap apps:

```bash
sudo snap refresh
```

---

## 13. Removing Tools

Example: remove native CLI packages on Debian-based systems:

```bash
sudo apt remove git nodejs -y
```

Remove a Snap app:

```bash
sudo snap remove code
```

Remove a Flatpak app:

```bash
flatpak uninstall com.visualstudio.code
```

---

## 14. Typical Development Workflow

Clone a repository:

```bash
git clone repo
cd project
```

Install dependencies:

```bash
bun install
```

Open in VS Code:

```bash
code .
```

Run the development server:

```bash
bun run dev
```

---

## 15. References

- Snap
- Flatpak
- Flathub
- APT documentation
- DNF documentation
- Pacman documentation
