import { GetServerSidePropsContext } from 'next';

export function getCookiesFromContext(context: GetServerSidePropsContext) {
  return context.req.headers.cookie ?? '';
}
