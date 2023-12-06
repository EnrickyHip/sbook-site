import styled, { css } from 'styled-components';

export const PieceAnnotationContainer = styled.div`
  margin: 10px;
  padding: 0 40px;
  width: 100%;

  ${({ theme }) => css`
    border-top: 1px solid ${theme.colors.gray2};
  `}

  p {
    padding: 15px 15px 15px 0;
    font-size: 12px;
  }
`;

export const AnnotationInfo = styled.div`
  display: flex;
  gap: 20px;
`;

export const AnnotationStats = styled.div`
  font-size: 14px;
  display: flex;
  justify-content: space-between;
`;

export const PieceAnnotationProgressContainer = styled.div`
  width: 100%;
`;
