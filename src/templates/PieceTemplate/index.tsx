import { Layout } from '@/components/Layout';
import { PiecePageProps } from '@/pages/obra/[id]';
import {
  AuthorContainer,
  PieceMainInfo,
  PieceContainer,
  Sinopse,
  PieceInfo,
  AvarageRatingContainer,
  AvarageRating,
  PieceOptions,
} from './styled';
import Image from 'next/image';
import { Heading } from '@/components/UI/Heading';
import { translatedStatus } from '@/domain/entity/Piece';
import { SbookRate } from '@/components/UI/SbookRate';
import { SbookButton } from '@/components/UI/SbookButton';
import { SbookDropdown, SbookDropdownItem, SbookDropdownMenu } from '@/components/UI/Dropdown';
import { Dropdown } from 'react-bootstrap';
import { MdOutlineBookmarkAdded, MdOutlinePause } from 'react-icons/md';
import { IoBookOutline } from 'react-icons/io5';
import { FaRegBookmark } from 'react-icons/fa';
import { BiBookmarkMinus } from 'react-icons/bi';
import { FaCheck } from 'react-icons/fa6';
import { PieceStatus, Status } from '@/domain/entity/PieceStatus';
import { requestApi } from '@/data/requestApi';
import { useSession } from '@/Context/Session';
import { Loading } from '@/components/UI/Loading';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import RatingModal from '@/components/Modal/RatingModal';

function getRatingColor(rating: number): string {
  if (rating < 1) return '#df0101';
  if (rating < 2) return '#df6601';
  if (rating < 3) return '#dfb701';
  if (rating < 4) return '#99D200';
  return '#569E00';
}

function getButtonColor(pieceStatus: PieceStatus): string {
  if (pieceStatus.status === 'finished') return '#509100';
  if (pieceStatus.status === 'in_progress') return '#1a849c';
  if (pieceStatus.status === 'hoping_to_start') return '#d1b61d';
  if (pieceStatus.status === 'abandoned') return '#575757';
  return '#d73f3f';
}

export function PieceTemplate({ piece, pieceStatus }: PiecePageProps) {
  const defaultCover = process.env.NEXT_PUBLIC_APP_URL + '/images/default_cover.jpg';
  const coverImgPath =
    process.env.NEXT_PUBLIC_API_URL && piece.cover_picture
      ? process.env.NEXT_PUBLIC_API_URL + piece.cover_picture
      : defaultCover;

  const { user } = useSession();
  const router = useRouter();
  const [coverSrc, setCoverSrc] = useState(coverImgPath);

  if (!user) {
    return <Loading />;
  }

  const authors = [
    ...piece.authors.map((author) => author.first_name),
    ...piece.users.map((author) => author.first_name),
  ];

  const showDate = piece.status === 'Published' || piece.status === 'Announced';
  const publishedDate = new Date(piece.published_at);
  const formatedDate = publishedDate.toLocaleString('pt-BR', {
    year: 'numeric',
    day: '2-digit',
    month: '2-digit',
    timeZone: 'UTC',
  });

  const changeStatus = async (status: Status | null) => {
    if (!status) {
      return removeStatus();
    }

    if (!pieceStatus) {
      return createStatus(status);
    }

    updateStatus(status);
  };

  const removeStatus = async () => {
    if (!pieceStatus) return;

    const statusResponse = await requestApi(`/status/${pieceStatus.id}/`, {
      method: 'DELETE',
    });

    if (statusResponse) {
      router.push('./' + piece.id);
    }
  };

  const updateStatus = async (status: Status) => {
    if (!pieceStatus) return;

    const statusResponse = await requestApi(`/status/${pieceStatus.id}/`, {
      method: 'PUT',
      body: { status: status },
    });

    if (statusResponse) {
      router.push('./' + piece.id);
    }
  };

  const createStatus = async (status: Status) => {
    const statusResponse = await requestApi('/status/', {
      method: 'POST',
      body: {
        status: status,
        user: user.id,
        piece: piece.id,
      },
    });

    if (statusResponse) {
      router.push('./' + piece.id);
    }
  };

  console.log(pieceStatus?.rating);
  return (
    <Layout>
      <PieceContainer>
        <Image
          height={280}
          width={195}
          sizes="100vw"
          style={{
            maxWidth: '300px',
            width: '65%',
            height: 'auto',
          }}
          onError={() => setCoverSrc(defaultCover)}
          src={coverSrc}
          alt={`Capa da obra ${piece.name}`}
        />

        <PieceMainInfo>
          <Heading size={40} as="h2">
            {piece.name}
          </Heading>

          <AuthorContainer>{authors.join(', ')}</AuthorContainer>

          <div className="mb-2">{piece.publisher.name}</div>

          <AvarageRatingContainer className="mb-4">
            <AvarageRating color={getRatingColor(piece.rating)}>{piece.rating.toFixed(1)}</AvarageRating>
            <SbookRate fontSize={30} disabled allowHalf value={piece.rating} />
          </AvarageRatingContainer>

          <PieceOptions>
            <SbookDropdown maxHeight={300}>
              <Dropdown.Toggle
                style={{ backgroundColor: pieceStatus ? getButtonColor(pieceStatus) : '' }}
                aria-label="minha conta"
                as={SbookButton}
              >
                {!pieceStatus && 'Adicionar à Estante'}

                {pieceStatus?.status === 'finished' && (
                  <>
                    Lido
                    <FaCheck />
                  </>
                )}

                {pieceStatus?.status === 'in_progress' && (
                  <>
                    Lendo
                    <IoBookOutline size={20} />
                  </>
                )}

                {pieceStatus?.status === 'hoping_to_start' && (
                  <>
                    Quero Ler
                    <FaRegBookmark size={16} />
                  </>
                )}

                {pieceStatus?.status === 'abandoned' && (
                  <>
                    Abandonado
                    <BiBookmarkMinus size={20} />
                  </>
                )}

                {pieceStatus?.status === 'paused' && (
                  <>
                    Pausado
                    <MdOutlinePause size={20} />
                  </>
                )}
              </Dropdown.Toggle>

              <SbookDropdownMenu>
                {pieceStatus?.status !== 'finished' && (
                  <SbookDropdownItem onClick={() => changeStatus('finished')}>
                    <MdOutlineBookmarkAdded size={20} />
                    Lido
                  </SbookDropdownItem>
                )}

                {pieceStatus?.status !== 'in_progress' && (
                  <SbookDropdownItem onClick={() => changeStatus('in_progress')}>
                    <IoBookOutline size={20} />
                    Lendo
                  </SbookDropdownItem>
                )}

                {pieceStatus?.status !== 'hoping_to_start' && (
                  <SbookDropdownItem onClick={() => changeStatus('hoping_to_start')}>
                    <FaRegBookmark size={16} />
                    Quero Ler
                  </SbookDropdownItem>
                )}

                {pieceStatus?.status !== 'paused' && (
                  <SbookDropdownItem onClick={() => changeStatus('paused')}>
                    <MdOutlinePause size={20} />
                    Pausado
                  </SbookDropdownItem>
                )}

                {pieceStatus?.status !== 'abandoned' && (
                  <SbookDropdownItem onClick={() => changeStatus('abandoned')}>
                    <BiBookmarkMinus size={20} />
                    Abandanado
                  </SbookDropdownItem>
                )}

                {pieceStatus && (
                  <SbookDropdownItem onClick={() => changeStatus(null)}>
                    <IoMdClose size={20} />
                    Remover da Estante
                  </SbookDropdownItem>
                )}
              </SbookDropdownMenu>
            </SbookDropdown>
            {pieceStatus && pieceStatus?.status === 'finished' && <RatingModal pieceStatus={pieceStatus} />}
          </PieceOptions>
        </PieceMainInfo>

        <PieceInfo>
          <div>Gêneros: {piece.genres.map((genre) => genre.name).join(', ')}</div>
          {piece.pages && (
            <div>
              {piece.pages} {piece.pages === 1 ? 'Página' : 'Páginas'}
            </div>
          )}
          <div>Status: {translatedStatus[piece.status]}</div>
          {showDate && <div>Publicação: {formatedDate}</div>}
          {piece.isbn && <div>ISBN: {piece.isbn}</div>}
        </PieceInfo>

        <Sinopse>
          <p>{piece.introduction}</p>
        </Sinopse>
      </PieceContainer>
    </Layout>
  );
}
