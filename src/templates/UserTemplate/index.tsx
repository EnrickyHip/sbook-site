import { Layout } from '@/components/Layout';
import {
  PiecesContainer,
  ProfileImage,
  UserContainer,
  UserFullName,
  UserInfo,
  UserName,
  VirtualBookCase,
} from './styled';
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
import { PieceStatus } from '@/domain/entity/PieceStatus';
import { ReadPiece } from '@/components/ReadPiece';
import { WishedPiece } from '@/components/WishedPiece';
import { isSmallScreen } from '@/utils/isSmallScreen';
import { ReadingPiece } from '@/components/ReadingPiece';

interface UserPageProps {
  user: User;
  status: UrlStatus | null;
  pieceStatuses: PieceStatus[];
}

const emptyMessages = {
  lidos: 'Você não terminou nenhuma obra ainda.',
  lendo: 'Você não está lendo nada no momento.',
  quero_ler: 'Você não possui nenhuma leitura desejada',
  abandonados: 'Você não tem nenhuma obra abandonada.',
  pausados: 'Você não possui nenhuma obra pausada.',
} as const;

export function UserTemplate({ user, status, pieceStatuses }: UserPageProps) {
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
        <UserInfo>
          <ProfileImage
            height={200}
            width={200}
            onError={() => setProfileSrc(profileImgPath)}
            src={profileSrc}
            alt={`Foto de perfil de ${user.first_name}`}
          />
          <UserFullName>
            {user.first_name} {user.last_name}
          </UserFullName>
          <UserName>{user.username}</UserName>
        </UserInfo>

        <VirtualBookCase>
          <Heading size={40} as="h2">
            Estante Virtual
          </Heading>

          <TabList>
            <SbookTabLi active={status === 'lidos'}>
              <MenuLink href={`/usuario/${user.id}/obras/lidos`}>
                <MdOutlineBookmarkAdded size={isSmallScreen() ? 20 : 24} />
                Lidos
              </MenuLink>
            </SbookTabLi>

            <SbookTabLi active={status === 'lendo'}>
              <MenuLink href={`/usuario/${user.id}/obras/lendo`}>
                <IoBookOutline size={isSmallScreen() ? 20 : 25} />
                Lendo
              </MenuLink>
            </SbookTabLi>

            <SbookTabLi active={status === 'quero_ler'}>
              <MenuLink href={`/usuario/${user.id}/obras/quero_ler`}>
                <FaRegBookmark size={isSmallScreen() ? 16 : 24} />
                Quero Ler
              </MenuLink>
            </SbookTabLi>

            <SbookTabLi active={status === 'pausados'}>
              <MenuLink href={`/usuario/${user.id}/obras/pausados`}>
                <MdOutlinePause size={isSmallScreen() ? 20 : 25} />
                Pausados
              </MenuLink>
            </SbookTabLi>

            <SbookTabLi active={status === 'abandonados'}>
              <MenuLink href={`/usuario/${user.id}/obras/abandonados`}>
                <BiBookmarkMinus size={isSmallScreen() ? 20 : 25} />
                Abandonados
              </MenuLink>
            </SbookTabLi>

            <SbookTabLi active={router.pathname === '/usuario/[id]/obras'}>
              <MenuLink href={`/usuario/${user.id}/obras`}>
                <MdOutlineHistoryEdu size={isSmallScreen() ? 20 : 26} />
                {loggedUser?.id === user.id ? 'Minhas Obras' : 'Obras Escritas'}
              </MenuLink>
            </SbookTabLi>
          </TabList>
          <Divider />
          <PiecesContainer>
            {pieceStatuses.length === 0 && status && <p>{emptyMessages[status]}</p>}
            {pieceStatuses.map((pieceStatus) => (
              <div key={pieceStatus.id}>
                {status === 'lidos' && <ReadPiece pieceStatus={pieceStatus} />}
                {status === 'lendo' && <ReadingPiece pieceStatus={pieceStatus} />}
                {status === 'quero_ler' && <WishedPiece pieceStatus={pieceStatus} />}
              </div>
            ))}
          </PiecesContainer>
        </VirtualBookCase>
      </UserContainer>
    </Layout>
  );
}
