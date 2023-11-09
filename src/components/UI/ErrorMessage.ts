import styled, { css } from 'styled-components';
import { P } from './Paragraph/styled';

export const ErrorMessage = styled(P)`
  min-height: 22px;

  ${({ theme }) => css`
    color: ${theme.colors.error};
  `}
`;
