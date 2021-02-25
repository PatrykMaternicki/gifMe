import { useState } from 'react';

const SearchComponent = ({ handleSearch, className = 'componentSearch' }) => {
  const [searchedValue, setSearchedValue] = useState('');

  const handleSubmit = (e) => {
    handleSearch(searchedValue);
    setSearchedValue('');
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={className}
    >
      <input
        className={`${className}__input`}
        type="text"
        value={searchedValue}
        placeholder="Type..."
        onChange={(e) => setSearchedValue(e.target.value)}
      />
      <input
        className={`${className}__button`}
        type="submit"
        value="Search"
        disabled={searchedValue === ''}
      />
    </form>
  );
};

export default SearchComponent;
