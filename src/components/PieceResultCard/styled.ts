import styled, { css } from 'styled-components';

export const PieceResultCardContainer = styled.div`
  color: black;
  display: flex;
  margin: 10px 0;
  padding: 10px;

  ${({ theme }) => css`
    &:hover {
      background-color: ${theme.colors.gray2};
    }
  `};
`;

export const PieceAnnotationProgressContainer = styled.div`
  width: 100%;
`;

export const PieceResultMainInfo = styled.div`
  margin: 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 800px) {
    align-items: center;
  }
`;

export const PieceAuthorResultContainer = styled.div`
  font-size: 16px;

  @media (max-width: 800px) {
    font-size: 18px;
  }
`;
