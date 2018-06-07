import React from 'react';

const SearchBar = ({ searchInput }) => {
  return (
    <input
      type="text"
      name="search"
      placeholder="Search for a City..."
      onChange={searchInput}
    />
  );
};

export default SearchBar;
