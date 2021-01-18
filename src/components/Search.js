import React from "react";

function Search({ plantSearchText, onSearchChange}) {

  function onPlantSearch(event) {
    return onSearchChange(event.target.value)
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={plantSearchText}
        onChange={onPlantSearch}
      />
    </div>
  );
}

export default Search;
