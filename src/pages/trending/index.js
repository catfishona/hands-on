import React, { useState, useEffect } from "react";
import axios from "axios";
import { ImageComponent } from "components/Gif";

function Trending() {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    getGifs();
  }, []);

  const getGifs = async () => {
    const datas = await axios
      .get(
        `https://api.giphy.com/v1/gifs/trending?api_key=Dug5OETNnJbpXFty4H3sStaKFoYlN5HM&q`
      )
      .then((response) => {
        return response.data.data;
      })
      .catch((e) => console.log(e));
    console.log(datas);
    setGifs(datas);
  };

  return (
    <div>
      <h1>Trending Gifs!</h1> 
      {gifs.map((gif, id) => (
        <ImageComponent
          key={id}
          url={gif.images.fixed_height.url}
          title={gif.title}
        />
      ))}
    </div>
  );
}

export default Trending;
