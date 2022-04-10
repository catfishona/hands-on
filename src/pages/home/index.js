import React from "react"
import gifs from "data/gifs";
import { ImageComponent } from "components/Gif/index";

function Home() {
  const gifList = gifs.map((gif, id) => (gif.rating === "g") &&
      <ImageComponent key={id} url={gif.url} title={gif.title}/>
  );
  
  return (
    <div>
      {gifList};
    </div>
  );
}

export default Home;
