#!/bin/sh

site="fabiovalentino.it"

npm run build

echo "Deployingto local server"

sudo rm -rf /var/www/http/$site/*

sudo cp -rf build/* /var/www/http/$site/

sudo chown -R http:http /var/www/http/$site/

#echo "Deploying to github pages"

#npm run deploy
