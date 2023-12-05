import { Label } from '@/components/UI/Label';
import styled from 'styled-components';
import { css } from 'styled-components';

export const RatingModalBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;

  textarea {
    resize: none;
    padding-top: 10px;
  }
`;

export const SummaryContainer = styled.div`
  width: 90%;

  ${Label} {
    font-size: 20px;
  }
`;

export const SummaryTextArea = styled.textarea`
  ${({ theme }) => css`
    width: 100%;
    border-radius: 5px;
    padding: 10px;
    border: 1px solid ${theme.colors.gray4};
  `}
`;
