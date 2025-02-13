export const getImageUrl = async (firstWord) => {
  // const firstWord = fact.split(" ").slice(0, 3).join(" ");
  // const firstWord = fact.split(" ", 3).join(" ");
  const res = await fetch(
    `https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red`
  );
  const { url } = res;
  return url;
};
