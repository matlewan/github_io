#!/bin/bash

root="$( cd -- "$(dirname "$0")" >/dev/null 2>&1 ; pwd -P )"
src=$root/dist
dst=$root/production
token=$(cat $root/github_token)
base_commit="140cf0580f32890883de7b33961786f8d643436a"

# Assuming `npm run build` was executed and all files are present in /dist directory
cd $dst
git reset --hard $base_commit
cp -r $src/* $dst
git add *
git commit -m "Add production files"
git push
curl -u matlewan:$token -X POST https://api.github.com/repos/matlewan/matlewan.github.io/pages/builds


