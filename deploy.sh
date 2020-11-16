rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m 'update' &&
git branch -M master &&
git remote add origin &&
git remote add origin git@github.com:codingories/crabUI-Vue3-Website.git &&
git push -f -u origin master &&
cd -
echo https://www.zjj21.com/crabUI-Vue3-Website/#/
