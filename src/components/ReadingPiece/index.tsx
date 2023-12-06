import { PieceStatus } from '@/domain/entity/PieceStatus';
import { useState } from 'react';
import Image from 'next/image';
import { ListPieceContainer } from '@/templates/UserTemplate/styled';
import Link from 'next/link';
import { PieceProgress } from './styled';

interface ReadingPieceInterface {
  pieceStatus: PieceStatus;
}

export const ReadingPiece = ({ pieceStatus }: ReadingPieceInterface) => {
  const defaultCover = process.env.NEXT_PUBLIC_APP_URL + '/images/default_cover.jpg';
  const coverImgPath =
    process.env.NEXT_PUBLIC_API_URL && pieceStatus.piece.cover_picture
      ? process.env.NEXT_PUBLIC_API_URL + pieceStatus.piece.cover_picture
      : defaultCover;

  const [coverSrc, setCoverSrc] = useState(coverImgPath);

  const lastPage = pieceStatus.last_page ?? 0;
  const piecePages = pieceStatus.piece.pages ?? 0;

  const percentage = piecePages === 0 ? 0 : (lastPage * 100) / piecePages;

  return (
    <ListPieceContainer>
      <Link href={`/obra/${pieceStatus.piece.id}`}>
        <Image
          title={pieceStatus.piece.name}
          height={140}
          width={98}
          onError={() => setCoverSrc(defaultCover)}
          src={coverSrc}
          alt={`Capa da obra ${pieceStatus.piece.name}`}
        />
      </Link>
      <PieceProgress height={4} strength={percentage} max={100} value={percentage} />
      <div>
        {lastPage}/{piecePages}
      </div>
    </ListPieceContainer>
  );
};
