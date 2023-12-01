import { requestApi } from '@/data/requestApi';
import { PieceStatus } from '@/domain/entity/PieceStatus';
import { User } from '@/domain/entity/User';
import { GetAllStatusResponse } from '@/domain/responses/StatusResponses';
import { UserTemplate } from '@/templates/UserTemplate';
import { GetServerSideProps } from 'next';

export interface UserPageProps {
  user: User;
  status: UrlStatus;
  pieceStatuses: PieceStatus[];
}

export type UrlStatus = 'lidos' | 'lendo' | 'quero_ler' | 'abandonados' | 'pausados';

const translatedStatuses = {
  lidos: 'finished',
  lendo: 'in_progress',
  quero_ler: 'hoping_to_start',
  abandonados: 'abandoned',
  pausados: 'paused',
} as const;

function statusIsValid(status: string): status is UrlStatus {
  return ['lidos', 'lendo', 'quero_ler', 'abandonados', 'pausados'].includes(status as UrlStatus);
}

export default function UserPage({ user, status, pieceStatuses }: UserPageProps) {
  return <UserTemplate user={user} status={status} pieceStatuses={pieceStatuses} />;
}

export const getServerSideProps: GetServerSideProps<UserPageProps> = async (context) => {
  const id = context?.params?.id;
  const status = context?.params?.status;

  if (!id || Array.isArray(id)) {
    return { notFound: true };
  }

  if (!status || Array.isArray(status) || !statusIsValid(status as string)) {
    return { notFound: true };
  }

  const url = `/status/search/user/${id}/${translatedStatuses[status as UrlStatus]}/`;

  const promises = [
    requestApi<User>(`/user/${id}/`, { method: 'GET' }, context),
    requestApi<GetAllStatusResponse>(url, { method: 'GET' }, context),
  ] as const;

  const [user, statusesResponse] = await Promise.all(promises);

  if (!user || !statusesResponse) {
    return { notFound: true };
  }

  return {
    props: {
      user: user,
      pieceStatuses: statusesResponse.status,
      status: status as UrlStatus,
    },
  };
};
