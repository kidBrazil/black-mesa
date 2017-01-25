#!/bin/sh
clear
# [ Black Mesa - Vue.JS ]
# 
# Setup Bash Script for installing Node dependencies and running dev server
#

# Program Variables
BLACKMESA="[ Black Mesa ] | Setup Script"

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

# Intro / Continue
echo "__________________________________________________________________________________________"
echo
echo "[ ${YELLOW}Black Mesa - Vue.js App${NC} ]"
echo
echo "${GREEN}Welcome Aboard Black Mesa! We are happy to have you as part"
echo "${GREEN}of our intrepid team. We are just getting your environment setup.${NC}"
echo
echo "__________________________________________________________________________________________"

sleep 2s

echo
echo "This script will install all the necessary ${GREEN}Node.js${NC} depedencies."
echo
echo "For more information and useful documentation please refer "
echo "to the [${GREEN} ~/docs ${NC}] folder inside of this repository."
echo 
echo "It includes information on Linting, Testing and styleguides. "
echo
echo "------------------------------------------------------------------------------------------"

sleep 2s

echo
echo "${RED}[ NOTICE! ]${NC} - This application depends on ${GREEN}Node.js${NC} being installed"
echo
echo "${GREEN}Please ensure that ${NC}Node.js${GREEN} is installed before proceeding.${NC}"

sleep 1s
echo

# Ask User for permission
echo "${YELLOW}--------------------------------------------${NC}"
echo "${YELLOW}--------------------------------------------${NC}"
read -p "${YELLOW}| Continue with installation?${NC} [ ${GREEN}Yes${NC} / ${RED}No${NC} ] ${YELLOW}|${NC}  " continue

# Case Switch for response
case "$continue" in

  # [ Black Mesa ] Setup Script RUN
  y|Y|yes|Yes|YES)
    # TODO -------------------
    #
    # 1- [ Maybe check that server runs ?? ]
    # 2- [ Maybe setup RSA keys??? ]
    # 3- Add DB keys and ENV keys if needed
    clear
    echo "${GREEN}Initiating Install...${NC}"
    echo
    sleep 2s
    # Fetch latest master branch
    echo "${GREEN}Fetching latest codebase from Master...${NC}"
    if git fetch && git checkout master && git pull origin master
      then
        sleep 2s
        continue
    else
      error_handle "Please clear your Git workspace by commiting or stashings your changes and try again."
    fi
    echo
    echo
    # Run NPM update
    echo "${GREEN}Fetching latest NPM database...${NC}"
    echo
    echo
    sleep 2s
    if npm update
      then
        continue
    else
      error_handle "Please ensure that you have the latest version of Node and NPM installed and try again."
    fi
    clear
    # Install Vue JS Globally
    echo "${GREEN}Installing Vue.js Globally...${NC}"
    echo
    echo
    sleep 2s
    if npm install -g vue
      then
        continue
    else
      error_handle "There was a problem installing Vue.js - Visit http://vuejs.org for Manual Installation steps"
    fi
    # Install NPM dependencies
    sleep 1s
    clear
    echo
    echo "${GREEN}Installing Node dependencies...${NC}"
    echo
    echo
    sleep 2s
    if cd vue-app-base/
      then
        npm install
        continue
    else
      error_handle "Seems there was a problem here. Contact an Admin."
    fi
    echo
    # Run Test Server
    clear
    echo 
    echo "${GREEN}SUCCESS! All dependencies installed...${NC}"
    echo
    echo "${GREEN}[ Welcome Aboard The ${ORANGE}Black Mesa${GREEN} ]${NC}"
    echo
    echo "${GREEN}------------------------------------------------------------------------------------------${NC}"
    echo
    echo "Please refer to the ${GREEN}[ ~/docs ]${NC} folder or the GitHub Wiki for guides on"
    echo
    echo "${YELLOW}- Dependencies"
    echo "${YELLOW}- Naming Convention"
    echo "${YELLOW}- Code Styleguide"
    echo "${YELLOW}- Linting"
    echo "${YELLOW}- Best Practices"
    echo "${YELLOW}- Code Recepies"
    echo "${YELLOW}- Routes [vue-router]"
    echo "${YELLOW}- VueX [State Management]"
    echo "${YELLOW}- Vue Resource [Ajax Wrapper]"
    echo "${YELLOW}- Firebase [OODB]"
    echo "${YELLOW}- Templating Structure"
    echo "${YELLOW}- Responsive Breakpoints"
    echo "${YELLOW}- SCSS Structure"
    echo "${YELLOW}- SCSS Styleguide"
    echo "${YELLOW}- And More...${NC}"
    sleep 3s
    echo
    echo "${YELLOW}Booting Up Test Server on [ ${GREEN}localhost:8080${NC} ]"
    echo
    sleep 1s
    npm run dev;;
  # No Run
  n|N|no|No|NO)
    echo "Maybe next time young padawan."
    sleep 1s;;
  exit|Exit|EXIT|e|E|Quit|q|Q)
    echo "Good Bye Dave"
    sleep 1s;;
  *)
    echo "Please select a valid Yes or No option. Type Exit or No to leave."
    sleep 2s
    sh ./setup/dev-environment.sh;;
esac
