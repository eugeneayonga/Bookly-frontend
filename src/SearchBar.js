import React from "react";

const SearchBar = ({ searchTerm, onSearch }) => {
  return (
    <div>
      <input
        type="text"
        id="search"
        value={searchTerm}
        placeholder="Search by book title"
        onChange={(event) => onSearch(event.target.value)}
      />
    </div>
  );
};


export default SearchBar;
