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

export { SearchBar };
