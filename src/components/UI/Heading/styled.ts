import styled, { css } from 'styled-components';
import { HeadingProps } from '.';

export const StyledHeading = styled.h1<HeadingProps>`
  margin: 0;
  ${({ size }) => css`
    font-size: ${size}px;
  `}
`;
