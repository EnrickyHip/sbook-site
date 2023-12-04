import React, { useState } from 'react';
import { SearchBarContainer, SearchBarInput } from './styled';
import { IoMdSearch, IoMdClose } from 'react-icons/io';

export interface SearchBarProps {
  closeFunction?: () => void;
}

function SearchBar({ closeFunction }: SearchBarProps) {
  const [search, setSearch] = useState('');

  return (
    <SearchBarContainer>
      <SearchBarInput
        value={search}
        onChange={({ target }) => setSearch(target.value)}
        type="text"
        placeholder="Pesquise aqui..."
      />

      {window.innerWidth > 800 && <IoMdSearch color="black" size={20} />}
      {window.innerWidth <= 800 && <IoMdClose onClick={closeFunction} color="black" size={20} />}
    </SearchBarContainer>
  );
}

export default SearchBar;
