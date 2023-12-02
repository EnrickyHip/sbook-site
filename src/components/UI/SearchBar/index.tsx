import React, { useState } from 'react';
import { SearchBarContainer, SearchBarInput } from './styled';
import { IoMdSearch } from 'react-icons/io';

export interface Props {
  children: React.ReactNode;
}

function SearchBar() {
  const [search, setSearch] = useState('');

  return (
    <SearchBarContainer>
      <SearchBarInput
        value={search}
        onChange={({ target }) => setSearch(target.value)}
        type="text"
        placeholder="Pesquise aqui..."
      />
      <IoMdSearch color="black" size={20} />
    </SearchBarContainer>
  );
}

export default SearchBar;
