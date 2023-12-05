import { SbookDropdownItem } from '@/components/UI/Dropdown';
import { StyledHeading } from '@/components/UI/Heading/styled';
import styled, { css } from 'styled-components';

export const AvarageRatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
  }
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
  padding: 50px 150px;
  grid-template-columns: 2fr 5fr;

  @media (max-width: 1200px) {
    padding: 40px 80px;
  }

  @media (max-width: 900px) {
    padding: 40px 30px;
  }

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    ${StyledHeading} {
      margin-top: 20px;
      font-size: 30px;
      text-align: center;
    }

    ${SbookDropdownItem} {
      font-size: 20px;
    }
  }
`;

export const PieceOptions = styled.div`
  display: flex;
  gap: 10px;
`;

export const PieceMainInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 800px) {
    align-items: center;
  }
`;

export const AuthorContainer = styled.div`
  font-size: 25px;

  @media (max-width: 800px) {
    font-size: 18px;
  }
`;

export const PieceInfo = styled.div`
  margin: 20px 0;

  @media (max-width: 800px) {
    text-align: center;
  }
`;

export const Sinopse = styled.article`
  margin-top: 30px;
  text-align: justify;

  @media (max-width: 800px) {
    font-size: 18px;
  }
`;
