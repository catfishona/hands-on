import React from "react";
import { func, string } from "prop-types";

const SearchBar = (props) => {
  return (
    <form onSubmit={props.searchInput}>
      <input
        className="input-area"
        type="text"
        placeholder="Search for a gif"
        value={props.query}
        onChange={props.getInput}
      ></input>
      <button type="submit">Search</button>
    </form>
  );
};

SearchBar.propTypes = {
  searchInput: func.isRequired,
  query: string,
  getInput: func,
};

export { SearchBar };
