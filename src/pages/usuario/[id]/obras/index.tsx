import { requestApi } from '@/data/requestApi';
import { User } from '@/domain/entity/User';
import { UserTemplate } from '@/templates/UserTemplate';
import { GetServerSideProps } from 'next';
import { UserPageProps } from './lidos';
import { UserPiecesTemplate } from '@/templates/UserTemplate/UserPiecesTemplate';

export default function UserPage({ user }: UserPageProps) {
  return (
    <UserTemplate user={user}>
      <UserPiecesTemplate user={user} />
    </UserTemplate>
  );
}

export const getServerSideProps: GetServerSideProps<UserPageProps> = async (context) => {
  const id = context?.params?.id;

  if (!id || Array.isArray(id)) {
    return { notFound: true };
  }

  const user = await requestApi<User>(`/user/${id}/`, { method: 'GET' }, context);

  if (!user) {
    return { notFound: true };
  }

  return {
    props: { user },
  };
};
