import React from "react";
import axios from "axios";
import { ImageComponent } from "components/Gif";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
      searchResults: [],
      theresData: false,
    };
  }

  getGifs = (query) => {
    axios
      .get(
        `https://api.giphy.com/v1/gifs/search?api_key=Dug5OETNnJbpXFty4H3sStaKFoYlN5HM&q=${query}&limit=12`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        this.setState({ searchResults: response.data.data });
        const gifs = this.state.searchResults;
        console.log(gifs);
        gifs ? this.setState({ theresData: true }) : console.log("no");
        // console.log(this.state.theresData);
      })
      .catch((e) => console.log(e));
  };

  getInput = (e) => {
    this.setState({ searchQuery: e.target.value });
  };

  searchInput = (e) => {
    console.log(`Query: ${this.state.searchQuery}`);
    this.getGifs(this.state.searchQuery);
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.searchInput}>
          <input
            className="input-area"
            type="text"
            placeholder="Search for a gif"
            value={this.state.searchQuery}
            onChange={this.getInput}
          ></input>
          <button type="submit">Submit</button>
          {this.state.theresData ? (
            this.state.searchResults.map((gif, id) => (
              <ImageComponent
                key={id}
                url={gif.images.fixed_height.url}
                title={gif.title}
              />
            ))
          ) : (
            <p>No data</p>
          )}
        </form>
      </div>
    );
  }
}

export default Search;
