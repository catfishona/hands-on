import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { ImageComponent } from "components/Gif";
import { SearchBar } from "components/SearchBar";
import { searchAction } from "../../redux/slices";

function Search() {
  const [gifs, setGifs] = useState([]);
  // const [query, setQuery] = useState("");
  let { query } = useSelector((state) => state.search);   // same as : const query = useSelector((state) => state.search.query)
  const dispatch = useDispatch();
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
    setGifs(datas);
  };

  const searchInput = (e) => {
    e.preventDefault();
    console.log(`query: ${query}`);
    getGifs(query);
  };

  return (
    <div>
      <SearchBar
        searchInput={searchInput}
        query={query}
        // getInput={(e) => setQuery(e.target.value)}
        getInput={(e) => dispatch(searchAction(e.target.value))}
      />
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
    </div>
  );
}

export default Search;
