import React, { useEffect, useState } from "react";

const CAT_ENDPOINT_RANDOM_FACT = "https://catfact.ninja/fact";
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${word}?fontSize=50&fontColor=red`;

const App = () => {
  const [fact, setFact] = useState();
  const [catImg, setCatImg] = useState(null);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then((res) => res.json())
      .then((data) => {
        const { fact } = data;
        setFact(fact);

        // const firstWord = fact.split(" ").slice(0, 3).join(" ");
        const firstWord = fact.split(" ", 3).join(" ");
        fetch(
          `https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red`
        ).then((data) => setCatImg(data.url));
      });
  }, [update]);

  const handleClick = () => {
    setUpdate(!update);
  };

  return (
    <main>
      <h1>Kitten Facts App</h1>
      <div className="card__container">
        <figure className="card__image__container">
          {catImg && <img src={catImg} alt="Cat picture" />}
        </figure>
        <div className="card__info">
          {fact && <p>{fact}</p>}
          <button onClick={handleClick}>New Fact</button>
        </div>
      </div>
    </main>
  );
};

export default App;
