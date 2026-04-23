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

    opensuse*)
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
      echo "Unsupported distribution"
      exit 1
      ;;
  esac
}

echo "Installing CLI tools..."

install_pkg git
install_pkg curl
install_pkg wget

echo "Done."