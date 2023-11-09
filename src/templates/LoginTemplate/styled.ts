import { ErrorMessage } from '@/components/UI/ErrorMessage';
import { StyledHeading } from '@/components/UI/Heading/styled';
import { SbookButton } from '@/components/UI/SbookButton';
import styled, { css } from 'styled-components';

// se precisar utilizar estes componentes novamente em algum lugar do sistema criar um componente para isto seria interessante

export const ShowPasswordButton = styled.button`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.gray2};
    border-left: none;
    border-top-right-radius: ${theme.borderRadius};
    border-bottom-right-radius: ${theme.borderRadius};
  `}

  cursor: pointer;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20%;
`;

export const LoginContainer = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

export const FormContainer = styled.main`
  margin-top: 40px;

  ${SbookButton} {
    width: 100%;
  }

  ${ErrorMessage} {
    margin-bottom: 25px;
    margin-top: 5px;
  }

  ${StyledHeading} {
    margin-bottom: 20px;
  }
`;

export const LoginForm = styled.form`
  width: 30vw;
`;

export const LoginInputContainer = styled.div`
  margin-top: 0.5rem;
`;
