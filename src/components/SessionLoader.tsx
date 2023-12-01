import { useRouter } from 'next/router';
import { useEffect, useState, useCallback } from 'react';
import { Loading } from './UI/Loading';
import { useSession } from '@/Context/Session';
import { requestApi } from '@/data/requestApi';
import { GenericError } from './GenericError';
import { CurrentUserResponse } from '@/domain/responses/UserResponses';

interface SessionLoaderProps {
  children: React.ReactNode;
}

const pagesWithLogoutRequired = ['/login', '/register '];

export function SessionLoader({ children }: SessionLoaderProps) {
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [sessionError, setSessionError] = useState(false);
  const session = useSession();
  const router = useRouter();

  const loadSession = useCallback(async () => {
    if (!mounted) return;

    const userResponse = await requestApi<CurrentUserResponse>('/user/current/', {
      method: 'GET',
    });

    if (!userResponse || userResponse.error) {
      setSessionError(true);
      setLoading(false);
      return;
    }

    const requireAuthentication = !pagesWithLogoutRequired.includes(router.pathname);

    if (!userResponse.user) {
      if (requireAuthentication) {
        await router.push('/login');
      }

      setLoading(false);
      return;
    }

    if (!requireAuthentication) {
      await router.push('/');
      setLoading(false);
    }

    session.cancelUpdate();
    session.login(userResponse.user);
    setLoading(false);
  }, [mounted, router, session]);

  useEffect(() => {
    setMounted(true);
    if (loading || session.updateRequested) loadSession();
    return () => setMounted(false);
  }, [session.updateRequested, loadSession]);

  if (sessionError) return <GenericError />;
  return (
    <>
      {loading && <Loading />}
      {children}
    </>
  );
}
