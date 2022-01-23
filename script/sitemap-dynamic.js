// sitemap-posts.js

// 필요한 모듈 로드
import fs from 'fs';
import prettier from 'prettier';
import fetch from 'node-fetch';

// 오늘 날짜 가져오기 & 도메인 설정
const getDate = new Date().toISOString();
const DSMD_DOMAIN = 'http://dsmd.kr';

const formatted = sitemap => prettier.format(sitemap, { parser: 'html' });
(async () => {
  //   // axios를 이용해 post 리스트 가져오기
  //   // <API_DOAMIN>, <API_NAME> 등은 실제 값이 아닙니다!
  //   await axios({
  //       method: 'post',
  //       url: 'https://<API_DOMAIN>/<API_NAME>',
  //       headers: {
  //           'Content-Type': 'application/graphql',
  //           'Authorization': [------------]
  //       },
  //       data:
  //           `{
  //   <GraphQL_APINAME> (
  //     ...
  //   ){
  //     title
  // 		...
  //   }
  // }`
  //   }).then((res) => {
  //       response = res.data.data.GraphQL_APINAME
  //   })
  //       .catch((e) => {
  //           console.log(e.response.data)
  //       })
  const response = await fetch(`http://118.67.128.85:8083/category`);
  const data = await response.json();

  // 적절히 파싱
  const categoryList = data.reduce((categoryList, { categoryId, name }) => {
    categoryList.push({ categoryId: categoryId, title: name });
    return categoryList;
  }, []);

  // 요것도 xml 구조에 맞게 파싱하여 재조립
  const categoryListSitemap = `
  ${categoryList
    .map(({ categoryId: categoryId }) => {
      return `
        <url>
          <loc>${DSMD_DOMAIN}/opinions/${categoryId}</loc>
          <lastmod>${getDate}</lastmod>
        </url>`;
    })
    .join('')}
`;

  const generatedSitemap = `
	<?xml version="1.0" encoding="UTF-8"?>
  	<urlset
    xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
  >
    ${categoryListSitemap}
  </urlset>
`;

  const formattedSitemap = formatted(generatedSitemap);

  fs.writeFileSync('../public/sitemap/sitemap-categories.xml', formattedSitemap, 'utf8');
})();
