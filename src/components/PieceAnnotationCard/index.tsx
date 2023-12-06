import { PieceAnnotation } from '@/domain/entity/PieceAnnotation';
import { Paragraph } from '../UI/Paragraph';
import { ProfileImage } from '@/templates/UserTemplate/styled';
import { useState } from 'react';
import { PieceProgress } from '../ReadingPiece/styled';
import { AnnotationInfo, AnnotationStats, PieceAnnotationContainer, PieceAnnotationProgressContainer } from './styled';

interface RatingModalProps {
  pieceAnnotation: PieceAnnotation;
}

export default function PieceAnnotationCard({ pieceAnnotation }: RatingModalProps) {
  const { user } = pieceAnnotation;
  const defaultProfileImg = process.env.NEXT_PUBLIC_APP_URL + '/images/default_profile.png';
  const profileImgPath =
    process.env.NEXT_PUBLIC_API_URL && user.profile_picture
      ? process.env.NEXT_PUBLIC_API_URL + user.profile_picture
      : defaultProfileImg;

  const [profileSrc, setProfileSrc] = useState(profileImgPath);

  const lastPage = pieceAnnotation.page_number ?? 0;
  const piecePages = pieceAnnotation.piece.pages ?? 0;

  const percentage = piecePages === 0 ? 0 : (lastPage * 100) / piecePages;
  const date = new Date(pieceAnnotation.created_at).toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });

  return (
    <PieceAnnotationContainer>
      <Paragraph>{pieceAnnotation.summary}</Paragraph>
      <AnnotationInfo>
        <ProfileImage
          height={40}
          width={40}
          onError={() => setProfileSrc(profileImgPath)}
          src={profileSrc}
          alt={`Foto de perfil de ${user.first_name}`}
        />
        <PieceAnnotationProgressContainer>
          <PieceProgress height={6} strength={percentage} max={100} value={percentage} />
          <AnnotationStats>
            <span>{date}</span>
            <span>{percentage}%</span>
            <span>
              {lastPage}/{piecePages}
            </span>
          </AnnotationStats>
        </PieceAnnotationProgressContainer>
      </AnnotationInfo>
    </PieceAnnotationContainer>
  );
}
