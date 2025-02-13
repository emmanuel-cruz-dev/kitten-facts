import { useEffect, useState } from "react";
import { getRandomFact } from "./services/facts";
import { useCatImage } from "./hooks/useCatImage";

// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${word}?fontSize=50&fontColor=red`;

const useCatFact = () => {
  const [fact, setFact] = useState();

  const refreshFact = () => {
    getRandomFact().then((newFact) => setFact(newFact));
  };

  useEffect(refreshFact, []);

  return { fact, refreshFact };
};

const App = () => {
  const { fact, refreshFact } = useCatFact();
  const { imageUrl } = useCatImage({ fact });

  // Recuperando cita al cargar la página

  const handleClick = async () => {
    refreshFact();
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
          <button onClick={handleClick}>Get new Fact</button>
        </aside>
      </article>
    </main>
  );
};

export default App;
