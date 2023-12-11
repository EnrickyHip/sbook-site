import { useState } from 'react';
import { PieceAuthorResultContainer, PieceResultCardContainer, PieceResultMainInfo } from './styled';
import { Piece } from '@/domain/entity/Piece';
import Image from 'next/image';
import { AvarageRatingContainer } from '@/templates/PieceTemplate/styled';
import { SbookRate } from '../UI/SbookRate';

interface PieceResultCardProps {
  piece: Piece;
}

export default function PieceResultCard({ piece }: PieceResultCardProps) {
  const defaultCover = process.env.NEXT_PUBLIC_APP_URL + '/images/default_cover.jpg';
  const CoverPath =
    process.env.NEXT_PUBLIC_API_URL && piece.cover_picture
      ? process.env.NEXT_PUBLIC_API_URL + piece.cover_picture
      : defaultCover;

  const [coverSrc, setCoverSrc] = useState(CoverPath);

  const authors = [
    ...piece.authors.map((author) => author.first_name),
    ...piece.users.map((author) => author.first_name),
  ];

  return (
    <PieceResultCardContainer>
      <Image
        height={100}
        width={70}
        onError={() => setCoverSrc(defaultCover)}
        src={coverSrc}
        alt={`Capa da obra ${piece.name}`}
      />
      <PieceResultMainInfo>
        <div style={{ fontSize: 18 }}>{piece.name}</div>

        <PieceAuthorResultContainer>{authors.join(', ')}</PieceAuthorResultContainer>

        <div style={{ fontSize: 12 }} className="mb-1">
          {piece.publisher.name}
        </div>

        <AvarageRatingContainer className="mb-2">
          <SbookRate fontSize={18} disabled allowHalf value={piece.rating} />
        </AvarageRatingContainer>
      </PieceResultMainInfo>
    </PieceResultCardContainer>
  );
}
