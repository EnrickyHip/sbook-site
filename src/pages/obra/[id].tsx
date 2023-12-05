import { requestApi } from '@/data/requestApi';
import { Piece } from '@/domain/entity/Piece';
import { PieceStatus } from '@/domain/entity/PieceStatus';
import { GetPieceStatusResponse } from '@/domain/responses/StatusResponses';
import { CurrentUserResponse } from '@/domain/responses/UserResponses';
import { PieceTemplate } from '@/templates/PieceTemplate';
import { GetServerSideProps } from 'next';

export interface PiecePageProps {
  piece: Piece;
  pieceStatus: PieceStatus | null;
}

export default function PiecePage({ piece, pieceStatus }: PiecePageProps) {
  return <PieceTemplate pieceStatus={pieceStatus} piece={piece} />;
}

export const getServerSideProps: GetServerSideProps<PiecePageProps> = async (context) => {
  const id = context?.params?.id;

  if (!id || Array.isArray(id)) {
    return { notFound: true };
  }

  const userResponse = await requestApi<CurrentUserResponse>('/user/current/', { method: 'GET' }, context);

  if (!userResponse?.user) {
    return { notFound: true };
  }

  const { user } = userResponse;

  const promises = [
    requestApi<Piece>(`/piece/${id}/`, { method: 'GET' }, context),
    requestApi<GetPieceStatusResponse>(`/status/user/piece/${user.id}/${id}`, { method: 'GET' }, context),
  ] as const;

  const [piece, statusResponse] = await Promise.all(promises);

  if (!piece || !statusResponse) {
    return { notFound: true };
  }

  return {
    props: { piece, pieceStatus: statusResponse.status },
  };
};
