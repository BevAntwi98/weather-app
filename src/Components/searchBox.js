import React from 'react';

// implement some more features

const SearchBar = ({city, setCity }) => {

return (

   <input
    type="text"
    placeholder="Enter a city..."
    autoComplete="off"
    value={city}
    onChange={(e) => setCity(e.target.value)}
  />
);
}

export default Searchbar
