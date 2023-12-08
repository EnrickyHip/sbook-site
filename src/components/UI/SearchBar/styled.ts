import styled, { css } from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  top: 60px;
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
  min-width: 400px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  color: black;
`;

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 62px;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 999; /* Valor maior que o z-index do ModalContainer */
`;

export const SearchBarContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: 400px;
    background-color: ${theme.colors.gray0};
    padding: 5px 10px;
  `}

  @media (max-width: 800px) {
    min-width: 100%;
    height: 42px;
    border-bottom: 1px solid gray;
    font-size: 20px;
    border-radius: 5px;
  }
`;

export const SearchBarInput = styled.input`
  ${({ theme }) => css`
    background-color: ${theme.colors.gray0};
  `}

  flex-grow: 1;
  outline: none;
  border: none;
`;
