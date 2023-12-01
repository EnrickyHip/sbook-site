import styled, { css } from 'styled-components';
import { Rate } from 'antd';

interface SbookRateInterface {
  fontSize?: number;
}

export const SbookRate = styled(Rate)<SbookRateInterface>`
  ${({ fontSize }) => css`
    ${fontSize &&
    css`
      font-size: ${fontSize}px;
    `}
  `}

  color: #FFCD3C;

  li {
    margin: 1px !important;
  }
`;
