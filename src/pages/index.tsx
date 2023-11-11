import { useSession } from '@/Context/Session';
import { Layout } from '@/components/Layout';
import { Loading } from '@/components/UI/Loading';

export default function Home() {
  const session = useSession();

  if (!session.user) {
    return <Loading />;
  }

  return <Layout>olá {session.user.username}!</Layout>;
}
