import { ErrorMessage } from '@/components/UI/ErrorMessage';
import { StyledHeading } from '@/components/UI/Heading/styled';
import { SbookButton } from '@/components/UI/SbookButton';
import styled from 'styled-components';

// se precisar utilizar estes componentes novamente em algum lugar do sistema criar um componente para isto seria interessante

export const RegisterContainer = styled.div`
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

export const RegisterForm = styled.form`
  width: 40vw;
  margin-bottom: 50px;
`;

export const LoginInputContainer = styled.div`
  margin-top: 0.5rem;
`;
