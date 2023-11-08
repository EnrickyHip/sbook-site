import styled, { css } from 'styled-components';

export const InputFooter = styled.div`
  display: flex;
  justify-content: right;
  margin-top: 5px;
  margin-bottom: 15px;
  font-size: 13px;

  a {
    ${({ theme }) => css`
      color: ${theme.colors.background.primary};
    `}
  }
`;
