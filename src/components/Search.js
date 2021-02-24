import { useState } from 'react';

const SearchComponent = ({handleSearch}) => {
  const [searchedValue, setSearchedValue ] = useState('')

  const handleSubmit = (e) => {
    handleSearch(searchedValue)
    e.preventDefault();
    e.stopPropagation();
  }

  return(
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        value={searchedValue}
        onChange={(e) => setSearchedValue(e.target.value)}  
      />
      <input 
        type="submit" 
        value="submit"
      />
    </form>
  )
}

export default SearchComponent