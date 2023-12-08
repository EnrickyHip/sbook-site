import { useState } from 'react';
import { User } from '@/domain/entity/User';
import { ProfileImage } from '@/templates/UserTemplate/styled';
import { UserResultCardContainer, UserResultMainInfo } from './styled';

interface UserResultCardProps {
  user: User;
}

export default function UserResultCard({ user }: UserResultCardProps) {
  const defaultProfile = process.env.NEXT_PUBLIC_APP_URL + '/images/default_profile.png';
  const ProfilePath =
    process.env.NEXT_PUBLIC_API_URL && user.profile_picture
      ? process.env.NEXT_PUBLIC_API_URL + user.profile_picture
      : defaultProfile;

  const [profileSrc, setProfileSrc] = useState(ProfilePath);

  return (
    <UserResultCardContainer>
      <ProfileImage
        height={70}
        width={70}
        onError={() => setProfileSrc(defaultProfile)}
        src={profileSrc}
        alt={`Foto de Perfil de ${user.first_name}`}
      />
      <UserResultMainInfo>
        <div>{user.first_name}</div>
        <div>{user.username}</div>
      </UserResultMainInfo>
    </UserResultCardContainer>
  );
}
