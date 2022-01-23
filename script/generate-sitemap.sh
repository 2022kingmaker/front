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

# Google 서치콘솔에 sitemap 업데이트 핑 전송
curl http://google.com/ping?sitemap=https://dsmd.kr/sitemap.xml
#echo "Google에 sitemap 핑 전송"