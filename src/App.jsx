import React, { useEffect, useState } from "react";

const App = () => {
  const [fact, setFact] = useState("Cat fact whatever");
  const [catImg, setCatImg] = useState(null);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    fetch("https://catfact.ninja/fact")
      .then((res) => res.json())
      .then((data) => setFact(data.fact));
  }, [update]);

  useEffect(() => {
    fetch("https://cataas.com/cat").then((data) => setCatImg(data.url));
  }, [update]);

  const handleClick = () => {
    setUpdate(!update);
  };

  return (
    <main>
      <h1>Kitten Facts App</h1>
      <div className="card__container">
        <img src={catImg} alt="Cat picture" width={400} />
        <p>{fact}</p>
        <button onClick={handleClick}>New Fact</button>
      </div>
    </main>
  );
};

export default App;
