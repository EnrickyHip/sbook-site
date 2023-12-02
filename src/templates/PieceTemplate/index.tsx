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
        <aside>
          <Image
            height={280}
            width={195}
            onError={() => setCoverSrc(defaultCover)}
            src={coverSrc}
            alt={`Capa da obra ${piece.name}`}
          />

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
        </aside>

        <PieceMainInfo>
          <Heading size={40} as="h2">
            {piece.name}
          </Heading>

          <AuthorContainer>{authors.join(', ')}</AuthorContainer>

          <div className="mb-2">{piece.publisher.name}</div>

          <AvarageRatingContainer>
            <AvarageRating color={getRatingColor(piece.rating)}>{piece.rating.toFixed(1)}</AvarageRating>
            <SbookRate fontSize={30} disabled allowHalf defaultValue={piece.rating} />
          </AvarageRatingContainer>

          <Sinopse>
            <p>{piece.introduction}</p>
          </Sinopse>
        </PieceMainInfo>
      </PieceContainer>
    </Layout>
  );
}
