import React from 'react';

const SearchBar = ({ searchInput, handleCity }) => {
  return (
    <div>
      <input
        type="text"
        name="search"
        placeholder="Search for a City..."
        onChange={searchInput}
      />
      <input type="submit" value="Submit" onClick={handleCity} />
    </div>
  );
};

export default SearchBar;
