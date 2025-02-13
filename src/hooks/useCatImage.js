import { useState, useEffect } from "react";

export function useCatImage({ fact }) {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    if (!fact) return;
    // const firstWord = fact.split(" ").slice(0, 3).join(" ");
    const firstWord = fact.split(" ", 3).join(" ");

    fetch(
      `https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red`
    ).then((res) => {
      const { url } = res;
      setImageUrl(url);
    });
  }, [fact]);

  return { imageUrl };
}
