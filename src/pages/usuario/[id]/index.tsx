import { GenericError } from '@/components/GenericError';
import { GetServerSideProps } from 'next';

export default function SettingsEquipaments() {
  return <GenericError />;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context?.params?.id;

  if (!id || Array.isArray(id)) {
    return { notFound: true };
  }

  return {
    redirect: {
      destination: `/usuario/${id}/obras/lidos`,
      permanent: false,
    },
  };
};
