const GOOGLE_ID = `G-VDT6ENG204`;

// 페이지 별 조회수 측정
export const pageView = (url: string) => {
  window.gtag('config', GOOGLE_ID, {
    page_path: url,
  });
};
