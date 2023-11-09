import { useSession } from '@/Context/Session';
import { Loading } from '@/components/UI/Loading';

export default function Home() {
  const session = useSession();

  if (!session.user) {
    return <Loading />;
  }

  return <h1>{session.user.username}</h1>;
}
