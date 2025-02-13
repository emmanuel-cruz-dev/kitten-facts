import { useCatImage } from "./hooks/useCatImage";
import { useCatFact } from "./hooks/useCatFact";
import { Other } from "./components/Other";

const App = () => {
  const { fact, refreshFact } = useCatFact();
  const { imageUrl } = useCatImage({ fact });

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
      <Other />
    </main>
  );
};

export default App;
