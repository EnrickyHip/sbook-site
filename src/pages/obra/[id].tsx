import { requestApi } from '@/data/requestApi';
import { Piece } from '@/domain/entity/Piece';
import { PieceTemplate } from '@/templates/PieceTemplate';
import { GetServerSideProps } from 'next';

export interface PiecePageProps {
  piece: Piece;
}

export default function PiecePage({ piece }: PiecePageProps) {
  return <PieceTemplate piece={piece} />;
}

export const getServerSideProps: GetServerSideProps<PiecePageProps> = async (context) => {
  const id = context?.params?.id;

  if (!id || Array.isArray(id)) {
    return { notFound: true };
  }

  const piece = await requestApi<Piece>(`/piece/${id}/`, { method: 'GET' }, context);

  if (!piece) {
    return { notFound: true };
  }

  return {
    props: { piece },
  };
};
