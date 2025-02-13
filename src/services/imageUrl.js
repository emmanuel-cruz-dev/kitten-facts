export const getImageUrl = async (firstWord) => {
  const res = await fetch(
    `https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red`
  );
  const { url } = res;
  return url;
};
