import React, { useEffect, useState } from 'react';

import { IoMdSearch, IoMdClose } from 'react-icons/io';
import { isSmallScreen } from '@/utils/isSmallScreen';
import { requestApi } from '@/data/requestApi';
import { SearchResponse } from '@/domain/responses/SearchResponse';
import { ModalBackdrop, ModalContainer, SearchBarContainer, SearchBarInput } from './styled';
import PieceResultCard from '@/components/PieceResultCard';
import Link from 'next/link';
import { Paragraph } from '../Paragraph';
import UserResultCard from '@/components/UserResultCard';

export interface SearchBarProps {
  closeFunction?: () => void;
}

function SearchBar({ closeFunction }: SearchBarProps) {
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResponse | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    searchApi();
  }, [search]);

  const searchApi = async () => {
    if (!search) {
      setSearchResults(null);
      return;
    }

    const searchResponse = await requestApi<SearchResponse>(`/search/?search=${search}`, {
      method: 'GET',
    });

    setSearchResults(searchResponse);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
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

      {isModalVisible && (
        <>
          <ModalBackdrop onClick={closeModal}></ModalBackdrop>
          <ModalContainer>
            {!searchResults?.pieces?.length && !searchResults?.users?.length ? (
              <Paragraph className="p-3">Nenhum resultado Encontrado</Paragraph>
            ) : (
              <></>
            )}
            {searchResults?.pieces.map((piece) => (
              <Link key={piece.id} onClick={() => setIsModalVisible(false)} href={`/obra/${piece.id}`}>
                <PieceResultCard piece={piece} />
              </Link>
            ))}
            {searchResults?.users.map((user) => (
              <Link key={user.id} onClick={() => setIsModalVisible(false)} href={`/usuario/${user.id}`}>
                <UserResultCard user={user} />
              </Link>
            ))}
          </ModalContainer>
        </>
      )}
    </div>
  );
}

export default SearchBar;
