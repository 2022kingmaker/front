export const getRating = async () => {
  const response = await fetch(
    `https://dsmd.kr:8093/rating?agency=%ED%95%9C%EA%B5%AD%EA%B0%A4%EB%9F%BD%EC%A1%B0%EC%82%AC%EC%97%B0%EA%B5%AC%EC%86%8C`,
  );
  return await response.json();
};
