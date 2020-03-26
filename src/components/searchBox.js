import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div>
      <input
        className="searchBox"
        type="search"
        placeholder="Search..."
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
