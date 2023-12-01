import { Heading } from '@/components/UI/Heading';
import { Loading } from '@/components/UI/Loading';
import { FormContainer, LoginInputContainer, RegisterContainer, RegisterForm } from './styled';
import { SbookButton } from '@/components/UI/SbookButton';
import { MdOutlineVisibility, MdOutlineVisibilityOff } from 'react-icons/md';
import { FiLogIn } from 'react-icons/fi';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { Input } from '@/components/UI/Input';
import { Label } from '@/components/UI/Label';
import { PasswordInput } from '@/components/UI/PasswordInput';
import { ErrorMessage } from '@/components/UI/ErrorMessage';
import { requestApi } from '@/data/requestApi';
import { useSession } from '@/Context/Session';
import { Select } from '@/components/UI/Select';
import { ShowPasswordButton } from '@/components/UI/ShowPasswordButton';
import { RegisterUserResponse } from '@/domain/responses/UserResponses';

export function RegisterTemplate() {
  const [passwordHidden, setPasswordHidden] = useState(true);
  const [confirmPasswordHidden, setConfirmPasswordHidden] = useState(true);

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassoword, setConfirmPassword] = useState('');
  const [pseudoName, setPseudoName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [gender, setGender] = useState('');

  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const session = useSession();
  const router = useRouter();

  const validateForm = () => {
    if (!name.trim()) {
      setErrorMessage('Por favor, digite seu nome.');
      return false;
    }

    if (!username.trim()) {
      setErrorMessage('Por favor, digite seu nome de usuário.');
      return false;
    }

    if (!gender.trim()) {
      setErrorMessage('Por favor, selecione o seu gênero.');
      return false;
    }

    if (!password.trim()) {
      setErrorMessage('Por favor, digite sua senha.');
      return false;
    }

    if (password !== confirmPassoword) {
      setErrorMessage('Senhas não coincidem.');
      return false;
    }

    return true;
  };

  const login = async () => {
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    const response = await requestApi<RegisterUserResponse>('/user/', {
      method: 'POST',
      body: {
        first_name: name,
        last_name: lastName ? lastName : null,
        username: username,
        pseudo_name: pseudoName ? pseudoName : null,
        birth_date: birthDate ? birthDate : null,
        gender: gender,
        password: password,
      },
    });
    setLoading(false);

    if (!response) {
      setErrorMessage('Houve um erro ao criar usuário');
      return;
    }

    if (response.username) {
      setErrorMessage(response.username[0]);
      return;
    }

    if (!response.user) {
      setErrorMessage('Houve um erro ao criar usuário');
      return;
    }

    session.login(response.user);
    router.push('/');
  };

  return (
    <>
      {loading && <Loading />}
      <RegisterContainer>
        <Heading as="h1" size={40}>
          SBook
        </Heading>
        {loading && <Loading />}
        <FormContainer onSubmit={(event) => event.preventDefault()}>
          <RegisterForm>
            <Heading as="h2" size={28}>
              Registrar
            </Heading>

            <LoginInputContainer>
              <Label htmlFor="name">Nome</Label>
              <Input
                id="name"
                value={name}
                onChange={({ target }) => setName(target.value)}
                type="text"
                placeholder="Informe seu nome"
              />
            </LoginInputContainer>

            <LoginInputContainer>
              <Label htmlFor="last_name">Sobrenome (Opcional)</Label>
              <Input
                id="last_name"
                value={lastName}
                onChange={({ target }) => setLastName(target.value)}
                type="text"
                placeholder="Informe seu sobrenome"
              />
            </LoginInputContainer>

            <LoginInputContainer>
              <Label htmlFor="username">Nome de Usuário</Label>
              <Input
                id="username"
                value={username}
                onChange={({ target }) => setUsername(target.value)}
                type="text"
                placeholder="Informe seu nome de usuário único"
              />
            </LoginInputContainer>

            <LoginInputContainer>
              <Label htmlFor="pseudo_name">Pseudônimo (Opcional)</Label>
              <Input
                id="pseudo_name"
                value={pseudoName}
                onChange={({ target }) => setPseudoName(target.value)}
                type="text"
                placeholder="Informe seu Pseudônimo"
              />
            </LoginInputContainer>

            <LoginInputContainer>
              <Label htmlFor="nascimento">Data de Nascimento (Opcional)</Label>
              <Input
                id="nascimento"
                value={birthDate}
                onChange={({ target }) => setBirthDate(target.value)}
                type="date"
                placeholder="Informe sua data de nascimento"
              />
            </LoginInputContainer>

            <LoginInputContainer>
              <Label htmlFor="gender">Gênero</Label>
              <Select onChange={({ target }) => setGender(target.value)} value={gender} id="gender">
                <option selected value="">
                  Selecione
                </option>
                <option value="Woman">Mulher</option>
                <option value="Man">Homem</option>
                <option value="Non-Binary">Não Binário</option>
                <option value="Genderfluid">Gênero Fluido</option>
                <option value="Agender">Agênero</option>
              </Select>
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
                  {passwordHidden ? <MdOutlineVisibility size={25} /> : <MdOutlineVisibilityOff size={25} />}
                </ShowPasswordButton>
              </PasswordInput>
            </LoginInputContainer>

            <LoginInputContainer>
              <Label htmlFor="confirm_password">Confirmar Senha</Label>
              <PasswordInput>
                <Input
                  id="confirm_password"
                  value={confirmPassoword}
                  onChange={({ target }) => setConfirmPassword(target.value)}
                  type={confirmPasswordHidden ? 'password' : 'type'}
                  placeholder="Confirme sua Senha"
                />
                <ShowPasswordButton
                  title="Mostrar senha"
                  role="button"
                  onClick={() => setConfirmPasswordHidden(!confirmPasswordHidden)}
                >
                  {confirmPasswordHidden ? <MdOutlineVisibility size={25} /> : <MdOutlineVisibilityOff size={25} />}
                </ShowPasswordButton>
              </PasswordInput>
            </LoginInputContainer>

            <ErrorMessage size={15}>{errorMessage}</ErrorMessage>

            <SbookButton title="Registrar no sistema" onClick={login}>
              Registrar
              <FiLogIn size={22} />
            </SbookButton>
          </RegisterForm>
        </FormContainer>
      </RegisterContainer>
    </>
  );
}
