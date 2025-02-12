import React, { useEffect, useState } from "react";

const App = () => {
  const [fact, setFact] = useState("Cat fact whatever");
  const [catImg, setCatImg] = useState(null);
  const [update, setUpdate] = useState(false);
  const [word, setWord] = useState(null);

  useEffect(() => {
    fetch("https://catfact.ninja/fact")
      .then((res) => res.json())
      .then((data) => {
        setFact(data.fact);
        setWord(data.fact.split(" ")[0]);
      });
  }, [update]);

  useEffect(() => {
    fetch(`https://cataas.com/cat/says/${word}?fontSize=50&fontColor=red`).then(
      (data) => setCatImg(data.url)
    );
  }, [fact]);

  const handleClick = () => {
    setUpdate(!update);
  };

  return (
    <main>
      <h1>Kitten Facts App</h1>
      <div className="card__container">
        <figure className="card__image__container">
          <img src={catImg} alt="Cat picture" />
        </figure>
        <div className="card__info">
          <p>{fact}</p>
          <button onClick={handleClick}>New Fact</button>
        </div>
      </div>
    </main>
  );
};

export default App;
