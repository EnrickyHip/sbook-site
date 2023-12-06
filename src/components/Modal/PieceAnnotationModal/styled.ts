import { Label } from '@/components/UI/Label';
import styled from 'styled-components';
import { css } from 'styled-components';

export const PieceAnnotationModalBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 60vh;

  textarea {
    resize: none;
    padding-top: 10px;
    font-size: 13px;
  }

  input {
    font-size: 14px;
  }
`;

export const ReadingAnnotationForm = styled.form`
  width: 90%;
`;

export const SummaryContainer = styled.div`
  ${Label} {
    font-size: 13px;
  }
`;

export const HasSpoilerCheckBox = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
  gap: 10px;

  input {
    width: auto;
    transform: scale(1.4);
    margin-left: 5px;
  }

  ${Label} {
    margin-bottom: 0;
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
