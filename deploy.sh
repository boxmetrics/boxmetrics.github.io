#!/usr/bin/env sh

set -e
npm run pages:build
cat .gitignore > pages/.vuepress/dist/.gitignore
cp -r .github/ pages/.vuepress/dist/.github/
cd pages/.vuepress/dist
echo "www.boxmetrics.io" > CNAME

git init
git add -A
git commit -m "$1"

git push git@github.com:boxmetrics/boxmetrics.github.io.git master
cd -
