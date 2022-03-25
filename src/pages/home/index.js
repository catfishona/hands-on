import gif from "data/gif";
import { ImageComponent } from "components/Gif/index";

function Home() {
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
      <ImageComponent url={gif.url} title={gif.title} titleText={gif.title} />
    </div>
  );
}

export default Home;
