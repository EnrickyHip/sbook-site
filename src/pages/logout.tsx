import { requestApi } from '@/data/requestApi';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import { useEffect } from 'react';
import { GenericError } from '@/components/GenericError';
import { CenteredDiv, CenteredScreenDiv } from '@/components/UI/CenteredDiv';
import { Paragraph } from '@/components/UI/Paragraph';
import { Loading } from '@/components/UI/Loading';
import { useSession } from '@/Context/Session';

interface LogoutProps {
  error: boolean;
}

export default function Logout({ error }: LogoutProps) {
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (error) return;
    session.logout();
    router.push('/login');
  }, []);

  if (error) {
    <CenteredScreenDiv gap={20}>
      <Paragraph size={25}>Houve um erro ao deslogar usuário. Recarregue a página e tente novamente.</Paragraph>
    </CenteredScreenDiv>;
  }

  return <Loading />;
}

export const getServerSideProps: GetServerSideProps<LogoutProps> = async (context) => {
  const response = await requestApi('/user/logout', { method: 'GET' }, context);

  return {
    props: {
      error: !response?.success,
    },
  };
};
