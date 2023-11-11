import { requestApi } from '@/data/requestApi';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import { useEffect } from 'react';
import { GenericError } from '@/components/GenericError';
import { CenteredDiv } from '@/components/UI/CenteredDiv';
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
    if (!error) {
      session.logout();
    }

    router.push('/');
  }, []);

  return <Loading />;
}

export const getServerSideProps: GetServerSideProps<LogoutProps> = async (context) => {
  console.log(context.req.headers.cookie);
  const response = await requestApi('/user/logout', { method: 'GET' }, context);

  console.log(response);

  return {
    props: {
      error: !response?.success,
    },
  };
};
