import { PieceStatus } from '@/domain/entity/PieceStatus';
import { useState } from 'react';
import Image from 'next/image';
import { ListPieceContainer } from '@/templates/UserTemplate/styled';
import { SbookRate } from '../UI/SbookRate';
import Link from 'next/link';

interface ReadPieceInterface {
  pieceStatus: PieceStatus;
}

export const ReadPiece = ({ pieceStatus }: ReadPieceInterface) => {
  const defaultCover = process.env.NEXT_PUBLIC_APP_URL + '/images/default_cover.jpg';
  const coverImgPath =
    process.env.NEXT_PUBLIC_API_URL && pieceStatus.piece.cover_picture
      ? process.env.NEXT_PUBLIC_API_URL + pieceStatus.piece.cover_picture
      : defaultCover;

  const [coverSrc, setCoverSrc] = useState(coverImgPath);

  return (
    <ListPieceContainer>
      <Link href={`/obra/${pieceStatus.piece.id}`}>
        <Image
          title={pieceStatus.piece.name}
          height={145}
          width={100}
          onError={() => setCoverSrc(defaultCover)}
          src={coverSrc}
          alt={`Capa da obra ${pieceStatus.piece.name}`}
        />
      </Link>
      <SbookRate style={{ marginTop: '5px' }} fontSize={18} allowHalf defaultValue={pieceStatus.rating ?? 0} disabled />
    </ListPieceContainer>
  );
};
