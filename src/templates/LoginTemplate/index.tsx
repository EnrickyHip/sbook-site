import { Heading } from '@/components/UI/Heading';
import { Loading } from '@/components/UI/Loading';
import { FormContainer, FormFooter, LoginContainer, LoginForm, LoginInputContainer } from './styled';
import { SbookButton } from '@/components/UI/SbookButton';
import { MdOutlineVisibility, MdOutlineVisibilityOff } from 'react-icons/md';
import { FiLogIn } from 'react-icons/fi';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { Input } from '@/components/UI/Input';
import { Label } from '@/components/UI/Label';
import { PasswordInput } from '@/components/UI/PasswordInput';
import { ErrorMessage } from '@/components/UI/ErrorMessage';
import { LoginResponse } from '@/domain/responses/LoginResponse';
import { requestApi } from '@/data/requestApi';
import { useSession } from '@/Context/Session';
import { ShowPasswordButton } from '@/components/UI/ShowPasswordButton';
import Link from 'next/link';

export function LoginTemplate() {
  const [passwordHidden, setPasswordHidden] = useState(true);
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const session = useSession();
  const router = useRouter();

  const validateForm = () => {
    if (!user.trim()) {
      setErrorMessage('Por favor, digite seu username.');
      return false;
    }

    if (!password.trim()) {
      setErrorMessage('Por favor, digite sua senha.');
      return false;
    }

    return true;
  };

  const login = async () => {
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    const response = await requestApi<LoginResponse>('/user/login/', {
      method: 'POST',
      body: { username: user, password: password },
    });

    if (!response) {
      return;
    }

    if (!response.user) {
      setErrorMessage('Username ou senha inválidos');
      return;
    }

    session.login(response.user);
    router.push('/');
  };

  return (
    <>
      {loading && <Loading />}
      <LoginContainer>
        <Heading as="h1" size={40}>
          SBook
        </Heading>
        {loading && <Loading />}
        <FormContainer onSubmit={(event) => event.preventDefault()}>
          <LoginForm>
            <Heading as="h2" size={28}>
              Login
            </Heading>

            <LoginInputContainer>
              <Label htmlFor="login">Usuário</Label>
              <Input
                id="login"
                value={user}
                onChange={({ target }) => setUser(target.value)}
                type="text"
                placeholder="Informe seu username"
              />
            </LoginInputContainer>

            <LoginInputContainer>
              <Label htmlFor="password">Senha</Label>
              <PasswordInput>
                <Input
                  id="password"
                  value={password}
                  onChange={({ target }) => setPassword(target.value)}
                  type={passwordHidden ? 'password' : 'type'}
                  placeholder="Informe sua Senha"
                />
                <ShowPasswordButton
                  title="Mostrar senha"
                  role="button"
                  onClick={() => setPasswordHidden(!passwordHidden)}
                >
                  {passwordHidden ? <MdOutlineVisibilityOff size={25} /> : <MdOutlineVisibility size={25} />}
                </ShowPasswordButton>
              </PasswordInput>
            </LoginInputContainer>

            <ErrorMessage size={15}>{errorMessage}</ErrorMessage>

            <SbookButton title="Logar no sistema" onClick={login}>
              Entrar
              <FiLogIn size={22} />
            </SbookButton>
            <FormFooter>
              <Link title="Não possui uma conta? Clique aqui para se registrar" href="/register">
                Não possui uma conta? Clique aqui para se registrar
              </Link>
            </FormFooter>
          </LoginForm>
        </FormContainer>
      </LoginContainer>
    </>
  );
}
