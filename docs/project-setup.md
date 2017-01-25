# Project Setup 

This document provides step-by-step instructions on how to setup and run the project on your local development machine.


## Install Node.js & NPM

This project has as it's main dependency a Node server architecture so it must be installed on your development machine before we proceed with the provided setup script.

### Mac OSX

1. [Install xCode](http://developer.apple.com/technologies/tools/)
2. [Install git](http://help.github.com/mac-git-installation/)
3. [Configure git](./github.md)
4. Install Node by running...
```
//Go To Home and Create a folder...
cd ~
mkdir node-install
cd node-install

//Clone Node...
git clone git://github.com/ry/node.git
cd node

//Run Configure
./configure

//Make Installation
make
sudo make install
```

###Debian

1.Install Node:
```
//Update apt-get database
sudo apt-get update

//Install Node
sudo apt-get install node

//Install NPM
sudo apt-get install npm
```

### Other OS
Please visit the (Node.Js)[http://nodejs.org] official website for guides on installing node on your particular OS.

## Run The Installation Script.
Now all you have to do is run the installation script. It will install all of the necessary Node dependencies and make the necessary configurations. At the end, it will launch a local server instance and you are ready to work!

1. Navigate to the black-mesa root project directory. [~/black-mesa/]
2. Execute the dev-environment.sh script by running:
```
//Execute Bash Script
./setup/dev-environment.sh
```

### Welcome Aboard!
