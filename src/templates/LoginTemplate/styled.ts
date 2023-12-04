import { ErrorMessage } from '@/components/UI/ErrorMessage';
import { StyledHeading } from '@/components/UI/Heading/styled';
import { SbookButton } from '@/components/UI/SbookButton';
import styled, { css } from 'styled-components';

// se precisar utilizar estes componentes novamente em algum lugar do sistema criar um componente para isto seria interessante

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

  @media (max-width: 1100px) {
    width: 50vw;
  }

  @media (max-width: 600px) {
    width: 80vw;
  }
`;

export const LoginInputContainer = styled.div`
  margin-top: 0.5rem;
`;

export const FormFooter = styled.div`
  display: flex;
  justify-content: right;
  margin-top: 5px;
  margin-bottom: 15px;
  font-size: 13px;

  a {
    ${({ theme }) => css`
      color: ${theme.colors.text.primary};
    `}
  }
`;
