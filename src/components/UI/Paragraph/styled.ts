import styled, { css } from 'styled-components';
import { ParagraphProps } from '.';

export const P = styled.p<ParagraphProps>`
  ${({ size }) => css`
    font-size: ${size}px;
  `}

  margin: 0;
`;
