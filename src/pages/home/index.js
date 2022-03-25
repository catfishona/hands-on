import gifs from "data/gifs";
import { ImageComponent } from "components/Gif/index";

function Home() {
  const gifList = gifs.map((gif, id) => (gif.rating === "g") &&
      <ImageComponent key={id} url={gif.url} title={gif.title}/>
  );
  
  return (
    <div>
      <br />
      <input
        className="input-area"
        type="text"
        placeholder="What are you looking for?"
      ></input>
      <button>Search</button>
      <br />
      <br />
      {gifList};
    </div>
  );
}

export default Home;
