import styled, { css } from 'styled-components';

export const UserResultCardContainer = styled.div`
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

export const UserResultMainInfo = styled.div`
  margin: 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 800px) {
    align-items: center;
  }
`;
