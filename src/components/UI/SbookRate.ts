import styled, { css } from 'styled-components';
import { Rate } from 'antd';

interface SbookRateInterface {
  fontSize?: number;
}

export const SbookRate = styled(Rate)<SbookRateInterface>`
  ${({ fontSize, theme }) => css`
    ${fontSize &&
    css`
      font-size: ${fontSize}px;

      .ant-rate-star-second {
        color: ${theme.colors.gray4};
      }
    `}
  `}

  color: #ffbb3c;

  li {
    margin: 1px !important;
  }
`;
