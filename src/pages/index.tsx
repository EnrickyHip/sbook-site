import { useSession } from '@/Context/Session';
import { Layout } from '@/components/Layout';
import { CenteredScreenDiv } from '@/components/UI/CenteredDiv';
import { Heading } from '@/components/UI/Heading';
import { Loading } from '@/components/UI/Loading';
import { Paragraph } from '@/components/UI/Paragraph';

export default function Home() {
  const session = useSession();

  if (!session.user) {
    return <Loading />;
  }

  return (
    <Layout>
      <CenteredScreenDiv style={{ height: 'calc(100vh - 200px)' }}>
        <Paragraph size={35}>Olá {session.user.first_name}! Bem vindo ao</Paragraph>
        <Heading size={75} as="h2">
          Sbook
        </Heading>
      </CenteredScreenDiv>
    </Layout>
  );
}
