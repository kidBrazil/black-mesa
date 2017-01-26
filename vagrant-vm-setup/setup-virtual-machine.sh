#!/usr/bin/env bash
clear
# [ Black Mesa - Vagrant VM ]
# ------------------------------------------------------------------
# Lucas Moreira - l.moreira@live.ca 
# ------------------------------------------------------------------
#
# Bash script for installing and configuring Vagrant Virtual Machine.
# with support for Windows | Mac | Linux architectures.

# Program Variables
BLACKMESA="[ Black Mesa ] | Vagrant Setup Script"

# Error Handling Function
error_handle() {
  echo
  echo "${RED}[ ERROR ] || ${BLACKMESA}: $1${NC}"
  echo
  exit 1
}

# Color Variables
ORANGE=`tput setaf 5`
GREEN=`tput setaf 2`
RED=`tput setaf 1`
YELLOW=`tput setaf 3`
NC=`tput sgr0`

# Program Introduction
clear
echo
echo "${YELLOW}[ Black Mesa  ] - Vagrant Setup Script${NC}"
sleep 1s
echo
echo "${YELLOW}--------------------------------------------------------------------------------${NC}"
echo
echo "${ORANGE}Welcome To The Black Mesa Development Team${NC}"
echo
echo "This Script will install ${GREEN}Vagrant${NC} and ${GREEN}Virtualbox${NC} on your machine."
echo "The Vagrant instance contained within this script is already setup to install dependencies"
echo "and pull all necessary apps for the project to run."
echo 
echo "${YELLOW}--------------------------------------------------------------------------------${NC}"
echo
sleep 2s
echo "${YELLOW}[ SUDO! ]${NC} - This script uses Adming Priviledges to install Vagrant."
echo
echo "${YELLOW}--------------------------------------------------------------------------------${NC}"
sleep 3s
read -p "{$YELLOW}Continue With Installation?" continueinstall

# [ Install Vagrant on OSX using Brew ]
if [ "$(uname)" == "Darwin" ]
then
  clear
  echo
  echo "${YELLOW}[ OS Detected as OSX | Darwin  ]${NC}"
  echo
  echo "${YELLOW}Checking for Homebrew Install...${NC}"
  sleep 1s
  
  # Check for BREW
  if brew help
  then
    echo
    echo "${GREEN}Brew is installed... proceeding with Cask..."
    sleep 2s
  else
    echo
    echo "${GREEN}Installing Homebrew Package Manager for OSX.${NC}"
    sleep 2s
    # Install brew
    /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
  fi
  echo
  echo "${GREEN}Brew is [ ON ] - Time to Tap the Cask... ${NC}"
  sleep 2s
  clear

  # Check for Cask install
  echo
  echo "${YELLOW}Checking for Cask installation...${NC}"
  echo
  if brew info cask
  then
    # Cask is installed...
    echo
    echo "${GREEN}Cask is already installed... Proceeding.${NC}"
    sleep 2s
  else
    # Install Cask...
    echo
    echo "${YELLOW}Installing Cask on Brew...${NC}"
    sleep 1s
    brew tap caskroom/cask
    brew install cask
    echo
    echo "${GREEN}Cask is [ ON ] - Time To Install VirtualBox${NC}"
    sleep 3s
  fi
  clear

  # Check for VirtualBox Install
  echo
  echo "${YELLOW}Checking for VirtualBox Installation...${NC}"
  echo
  if vboxmanage --version
  then
    # Virtual Box Installed
    echo
    echo ""
  else
  fi
fi
