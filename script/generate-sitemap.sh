cd public

rm -rf sitemap
mkdir sitemap

cd ..
cd script

node ./robots.js

node ./sitemap-common.js
echo "정적 sitemap 생성 완료!"

echo "동적 sitemap 조회 및 생성중.."
node ./sitemap-dynamic.js
echo "동적 sitemap 생성 완료!"

echo "sitemap gzip 압축중"
node ./sitemap-compress.js
node ./sitemap.js
echo "sitemap 압축 완료"
