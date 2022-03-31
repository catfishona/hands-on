import React, { useState } from "react";
import axios from "axios";
import { ImageComponent } from "components/Gif";

function Search() {
  const [gifs, setGifs] = useState([]);
  const [query, setQuery] = useState("");
  const [found, isFound] = useState(false);

  const getGifs = async (query) => {
    const datas = await axios
      .get(
        `https://api.giphy.com/v1/gifs/search?api_key=Dug5OETNnJbpXFty4H3sStaKFoYlN5HM&q=${query}&limit=12`
      )
      .then((response) => {
        return response.data.data;
      })
      .catch((e) => console.log(e));

    console.log(datas);

    // check if data is found
    datas.length > 0 ? isFound(true) : isFound(false);
    //TODO: found still returns false
    // found ? console.log("data found !") : console.log("no data found");

    setGifs(datas);
  };

  const getInput = (e) => {
    setQuery(e.target.value);
  };

  const searchInput = (e) => {
    e.preventDefault();
    console.log(`query: ${query}`);
    getGifs(query);
  };

  return (
    <div>
      <form onSubmit={searchInput}>
        <input
          className="input-area"
          type="text"
          placeholder="Search for a gif"
          value={query}
          onChange={getInput}
        ></input>
        <button type="submit">Search</button>

        {found ? (
          gifs.map((gif, id) => (
            <ImageComponent
              key={id}
              url={gif.images.fixed_height.url}
              title={gif.title}
            />
          ))
        ) : (
          <p>No data to show</p>
        )}
      </form>

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

export default Search;
