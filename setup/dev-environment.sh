#!/bin/sh
clear
echo "[ Black Mesa - Vue.js App ]--------------------------------"
echo "..........................................................."
echo
echo "Welcome Aboard Black Mesa! We are happy to have tou as part"
echo
echo
echo "-----------------------------------------------------------"
echo
echo "This script will install all the necessary NPM depedencies."
echo
echo "For more information and useful documentation please refer "
echo "to the [ ~/docs ] folder inside of this repository."
echo 
echo "It includes information on Linting, Testing and styleguides. "
echo
echo "-----------------------------------------------------------"
echo
read -p "Continue with installation? [ Yes / No ] " continue

case "$continue" in
  # [ Black Mesa ] Setup Script RUN
  y|Y|yes|Yes|YES)
    # TODO -------------------
    #
    # 1- Fetch && Pull
    # 2- run npm install -g vue
    # 2- Run NPM Install
    # 3- [ Maybe check that server runs ?? ]
    # 4- [ Maybe setup RSA keys??? ]
    # 5- Add DB keys and ENV keys if needed
    echo "You said yes"
    sleep 1s;;
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
