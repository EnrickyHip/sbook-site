import React, { useState } from 'react';
import { SearchBarContainer, SearchBarInput } from './styled';
import { IoMdSearch, IoMdClose } from 'react-icons/io';
import { isSmallScreen } from '@/utils/isSmallScreen';

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

      {!isSmallScreen() && <IoMdSearch color="black" size={20} />}
      {isSmallScreen() && <IoMdClose onClick={closeFunction} color="black" size={20} />}
    </SearchBarContainer>
  );
}

export default SearchBar;
