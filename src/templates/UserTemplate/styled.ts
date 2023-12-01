import Image from 'next/image';
import styled from 'styled-components';

// se precisar utilizar estes componentes novamente em algum lugar do sistema criar um componente para isto seria interessante

export const UserContainer = styled.div`
  display: grid;
  padding: 80px 150px;
  grid-template-columns: 2fr 5fr;
`;

export const VirtualBookCase = styled.div`
  margin-top: 10px;
  display: flex;

  flex-direction: column;

  h2 {
    margin-bottom: 20px;
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
