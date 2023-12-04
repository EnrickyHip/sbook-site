import { Layout } from '@/components/Layout';
import { PiecePageProps } from '@/pages/obra/[id]';
import {
  AuthorContainer,
  PieceMainInfo,
  PieceContainer,
  Sinopse,
  PieceInfo,
  AvarageRatingContainer,
  AvarageRating,
} from './styled';
import Image from 'next/image';
import { useState } from 'react';
import { Heading } from '@/components/UI/Heading';
import { translatedStatus } from '@/domain/entity/Piece';
import { SbookRate } from '@/components/UI/SbookRate';
import { SbookButton } from '@/components/UI/SbookButton';
import { SbookDropdown, SbookDropdownItem, SbookDropdownMenu } from '@/components/UI/Dropdown';
import { Dropdown } from 'react-bootstrap';
import { MdOutlineBookmarkAdded, MdOutlinePause } from 'react-icons/md';
import { IoBookOutline } from 'react-icons/io5';
import { FaRegBookmark } from 'react-icons/fa';
import { BiBookmarkMinus } from 'react-icons/bi';

function getRatingColor(rating: number): string {
  if (rating < 1) return '#df0101';
  if (rating < 2) return '#df6601';
  if (rating < 3) return '#dfb701';
  if (rating < 4) return '#99D200';
  return '#569E00';
}

export function PieceTemplate({ piece }: PiecePageProps) {
  const defaultCover = process.env.NEXT_PUBLIC_APP_URL + '/images/default_cover.jpg';
  const coverImgPath =
    process.env.NEXT_PUBLIC_API_URL && piece.cover_picture
      ? process.env.NEXT_PUBLIC_API_URL + piece.cover_picture
      : defaultCover;

  const [coverSrc, setCoverSrc] = useState(coverImgPath);

  const authors = [
    ...piece.authors.map((author) => author.first_name),
    ...piece.users.map((author) => author.first_name),
  ];

  const showDate = piece.status === 'Published' || piece.status === 'Announced';
  const publishedDate = new Date(piece.published_at);
  const formatedDate = publishedDate.toLocaleString('pt-BR', {
    year: 'numeric',
    day: '2-digit',
    month: '2-digit',
    timeZone: 'UTC',
  });

  return (
    <Layout>
      <PieceContainer>
        <Image
          height={280}
          width={195}
          sizes="100vw"
          style={{
            maxWidth: '300px',
            width: '65%',
            height: 'auto',
          }}
          onError={() => setCoverSrc(defaultCover)}
          src={coverSrc}
          alt={`Capa da obra ${piece.name}`}
        />

        <PieceMainInfo>
          <Heading size={40} as="h2">
            {piece.name}
          </Heading>

          <AuthorContainer>{authors.join(', ')}</AuthorContainer>

          <div className="mb-2">{piece.publisher.name}</div>

          <AvarageRatingContainer className="mb-4">
            <AvarageRating color={getRatingColor(piece.rating)}>{piece.rating.toFixed(1)}</AvarageRating>
            <SbookRate fontSize={30} disabled allowHalf defaultValue={piece.rating} />
          </AvarageRatingContainer>

          <SbookDropdown maxHeight={300}>
            <Dropdown.Toggle aria-label="minha conta" as={SbookButton}>
              Adicionar à Estante
            </Dropdown.Toggle>

            <SbookDropdownMenu>
              <SbookDropdownItem>
                <MdOutlineBookmarkAdded size={20} />
                Lidos
              </SbookDropdownItem>
              <SbookDropdownItem>
                <IoBookOutline size={20} />
                Lendo
              </SbookDropdownItem>
              <SbookDropdownItem>
                <FaRegBookmark size={16} />
                Quero Ler
              </SbookDropdownItem>
              <SbookDropdownItem>
                <MdOutlinePause size={20} />
                Pausado
              </SbookDropdownItem>
              <SbookDropdownItem>
                <BiBookmarkMinus size={20} />
                Abandanado
              </SbookDropdownItem>
            </SbookDropdownMenu>
          </SbookDropdown>
        </PieceMainInfo>

        <PieceInfo>
          <div>Gêneros: {piece.genres.map((genre) => genre.name).join(', ')}</div>
          {piece.pages && (
            <div>
              {piece.pages} {piece.pages === 1 ? 'Página' : 'Páginas'}
            </div>
          )}
          <div>Status: {translatedStatus[piece.status]}</div>
          {showDate && <div>Publicação: {formatedDate}</div>}
          {piece.isbn && <div>ISBN: {piece.isbn}</div>}
        </PieceInfo>

        <Sinopse>
          <p>{piece.introduction}</p>
        </Sinopse>
      </PieceContainer>
    </Layout>
  );
}
