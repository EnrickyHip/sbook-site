import { requestApi } from '@/data/requestApi';
import { User } from '@/domain/entity/User';
import { UserTemplate } from '@/templates/UserTemplate';
import { GetServerSideProps } from 'next';

export interface UserPageProps {
  user: User;
}

export default function UserPage({ user }: UserPageProps) {
  return <UserTemplate user={user} status={null} />;
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
