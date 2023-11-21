import styled, { css } from 'styled-components';

export const Divider = styled.div`
  ${({ theme }) => css`
    border-bottom: 1px solid ${theme.colors.gray5};
  `}
`;
