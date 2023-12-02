import styled, { css } from 'styled-components';

// se precisar utilizar estes componentes novamente em algum lugar do sistema criar um componente para isto seria interessante

export const AvarageRatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

interface AvarageRatingProps {
  color?: string;
}

export const AvarageRating = styled.div<AvarageRatingProps>`
  ${({ color }) => css`
    background-color: ${color};
  `}

  color: white;
  font-size: 20px;
  border-radius: 5px;
  padding: 10px 12px;
`;

export const PieceContainer = styled.div`
  display: grid;
  padding: 80px 150px;
  grid-template-columns: 2fr 5fr;
`;

export const PieceMainInfo = styled.div`
  margin-top: 40px;
`;

export const AuthorContainer = styled.div`
  font-size: 25px;
`;

export const PieceInfo = styled.div`
  margin: 20px 0;
`;

export const Sinopse = styled.article`
  margin-top: 30px;
`;
