import { requestApi } from '@/data/requestApi';
import { User } from '@/domain/entity/User';
import { UserTemplate } from '@/templates/UserTemplate';
import { GetServerSideProps } from 'next';

export interface UserPageProps {
  user: User;
  status: UrlStatus;
}

export type UrlStatus = 'lidos' | 'lendo' | 'quero_ler' | 'abandonados' | 'pausados';

function statusIsValid(status: string): status is UrlStatus {
  return ['lidos', 'lendo', 'quero_ler', 'abandonados', 'pausados'].includes(status as UrlStatus);
}

export default function UserPage({ user, status }: UserPageProps) {
  return <UserTemplate user={user} status={status} />;
}

export const getServerSideProps: GetServerSideProps<UserPageProps> = async (context) => {
  const id = context?.params?.id;
  const status = context?.params?.status;

  if (!id || Array.isArray(id)) {
    return { notFound: true };
  }

  if (!status || Array.isArray(id) || !statusIsValid(status as string)) {
    return { notFound: true };
  }

  const user = await requestApi<User>(`/user/${id}/`, { method: 'GET' }, context);

  if (!user) {
    return { notFound: true };
  }

  return {
    props: { user, status: status as UrlStatus },
  };
};
