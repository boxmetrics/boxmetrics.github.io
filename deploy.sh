#!/usr/bin/env sh

set -e
npm run pages:build
cd pages/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

git push -sf git@github.com:boxmetrics/boxmetrics.github.io.git master:gh-pages
cd -
