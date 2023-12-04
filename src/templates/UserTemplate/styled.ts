import { StyledHeading } from '@/components/UI/Heading/styled';
import Image from 'next/image';
import styled from 'styled-components';

// se precisar utilizar estes componentes novamente em algum lugar do sistema criar um componente para isto seria interessante

export const UserContainer = styled.div`
  display: grid;
  padding: 80px 150px;
  grid-template-columns: 2fr 5fr;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    padding: 0;
  }
`;

export const VirtualBookCase = styled.div`
  margin-top: 10px;
  display: flex;

  flex-direction: column;

  ${StyledHeading} {
    margin-bottom: 20px;
  }

  @media (max-width: 800px) {
    ${StyledHeading} {
      text-align: center;
    }
  }
`;

export const ListPieceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PiecesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  gap: 25px;

  @media (max-width: 800px) {
    padding: 25px 10px;
    gap: 15px;
  }

  @media (max-width: 600px) {
  }
`;

export const UserFullName = styled.div`
  font-size: 20px;
  margin-top: 20px;
`;

export const UserName = styled.div`
  font-size: 15px;
`;

export const UserInfo = styled.aside`
  margin: 20px 0;
  text-align: center;
`;

export const ProfileImage = styled(Image)`
  border-radius: 50%;
`;
