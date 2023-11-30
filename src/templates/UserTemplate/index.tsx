import { Layout } from '@/components/Layout';
import { ProfileImage, UserContainer, UserInfo, VirtualBookCase } from './styled';
import { useState } from 'react';
import { Heading } from '@/components/UI/Heading';
import { MenuLink, SbookTabLi, TabList } from '@/components/UI/NavTab';
import { MdOutlineBookmarkAdded, MdOutlineHistoryEdu } from 'react-icons/md';
import { User } from '@/domain/entity/User';
import { useSession } from '@/Context/Session';
import { Divider } from '@/components/UI/Divider';
import { IoBookOutline } from 'react-icons/io5';
import { FaRegBookmark } from 'react-icons/fa';
import { useRouter } from 'next/router';
import { MdOutlinePause } from 'react-icons/md';
import { BiBookmarkMinus } from 'react-icons/bi';
import { UrlStatus } from '@/pages/usuario/[id]/obras/[status]';

interface UserPageProps {
  user: User;
  status: UrlStatus | null;
}

export function UserTemplate({ user, status }: UserPageProps) {
  const { user: loggedUser } = useSession();
  const router = useRouter();

  const defaultProfileImg = process.env.NEXT_PUBLIC_APP_URL + '/images/default_profile.png';
  const profileImgPath =
    process.env.NEXT_PUBLIC_API_URL && user.profile_picture
      ? process.env.NEXT_PUBLIC_API_URL + user.profile_picture
      : defaultProfileImg;

  const [profileSrc, setProfileSrc] = useState(profileImgPath);

  return (
    <Layout>
      <UserContainer>
        <aside>
          <ProfileImage
            height={200}
            width={200}
            onError={() => setProfileSrc(profileImgPath)}
            src={profileSrc}
            alt={`Foto de perfil de ${user.first_name}`}
          />
          <UserInfo></UserInfo>
        </aside>

        <VirtualBookCase>
          <Heading size={40} as="h2">
            Estante Virtual
          </Heading>
          <TabList>
            <SbookTabLi active={status === 'lidos'}>
              <MenuLink href={`/usuario/${user.id}/obras/lidos`}>
                <MdOutlineBookmarkAdded size={24} />
                Lidos
              </MenuLink>
            </SbookTabLi>

            <SbookTabLi active={status === 'lendo'}>
              <MenuLink href={`/usuario/${user.id}/obras/lendo`}>
                <IoBookOutline size={25} />
                Lendo
              </MenuLink>
            </SbookTabLi>

            <SbookTabLi active={status === 'quero_ler'}>
              <MenuLink href={`/usuario/${user.id}/obras/quero_ler`}>
                <FaRegBookmark size={20} />
                Quero Ler
              </MenuLink>
            </SbookTabLi>

            <SbookTabLi active={status === 'pausados'}>
              <MenuLink href={`/usuario/${user.id}/obras/pausados`}>
                <MdOutlinePause size={25} />
                Pausados
              </MenuLink>
            </SbookTabLi>

            <SbookTabLi active={status === 'abandonados'}>
              <MenuLink href={`/usuario/${user.id}/obras/abandonados`}>
                <BiBookmarkMinus size={25} />
                Abandonados
              </MenuLink>
            </SbookTabLi>

            <SbookTabLi active={router.pathname === '/usuario/[id]/obras'}>
              <MdOutlineHistoryEdu size={26} />
              <MenuLink href={`/usuario/${user.id}/obras`}>
                {loggedUser?.id === user.id ? 'Minhas Obras' : 'Obras Escritas'}
              </MenuLink>
            </SbookTabLi>
          </TabList>
          <Divider />
          <div>{status ?? 'minhas obras'}</div>
        </VirtualBookCase>
      </UserContainer>
    </Layout>
  );
}
