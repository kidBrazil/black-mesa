#!/usr/bin/env bash
# Color Variables
ORANGE=`tput setaf 5`
GREEN=`tput setaf 2`
RED=`tput setaf 1`
YELLOW=`tput setaf 3`
NC=`tput sgr0`

echo "${YELLOW}"
echo "======================================================================================"
echo "${YELLOW} || THIS SCRIPT BUILDS IMAGES FOR DEV ||${NC}"
echo "======================================================================================"
echo
echo
sleep 1s
# Build the whole thing first...
npm run build
rm -r dist/about
rm -r dist/app
rm -r dist/contact
rm  dist/index.html
rm  dist/robots.txt
rm  dist/sitemap.xml
rm -r dist/js
rm -r dist/services
rm -r dist/team
echo
echo
echo "${GREEN} || Images built, ready for dev ||${NC}"
