import React, { useEffect, useState } from "react";

const CAT_ENDPOINT_RANDOM_FACT = "https://catfact.ninja/fact";
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${word}?fontSize=50&fontColor=red`;

const App = () => {
  const [fact, setFact] = useState();
  const [imageUrl, setImageUrl] = useState(null);
  const [update, setUpdate] = useState(false);
  const [firstWord, setFirstWord] = useState();

  // Recuperando cita al cargar la página
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then((res) => res.json())
      .then((data) => {
        const { fact } = data;
        setFact(fact);
        const word = fact.split(" ", 3).join(" ");
        setFirstWord(word);
      });
  }, [update]);

  useEffect(() => {
    // const firstWord = fact.split(" ").slice(0, 3).join(" ");
    fetch(
      `https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red`
    ).then((response) => {
      const { url } = response;
      setImageUrl(url);
    });
  }, [firstWord]);

  const handleClick = () => {
    setUpdate(!update);
  };

  return (
    <main>
      <h1>Kitten Facts App</h1>
      <article className="card__container">
        <figure className="card__image__container">
          {imageUrl && (
            <img
              src={imageUrl}
              alt={`Image extracted from three words for ${fact}`}
              title={`Image extracted from three words for ${fact}`}
            />
          )}
        </figure>
        <aside className="card__info">
          {fact && <p>{fact}</p>}
          <button onClick={handleClick}>New Fact</button>
        </aside>
      </article>
    </main>
  );
};

export default App;
