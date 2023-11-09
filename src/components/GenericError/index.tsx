import { CenteredScreenDiv } from '../UI/CenteredDiv';
import { Paragraph } from '../UI/Paragraph';

export function GenericError() {
  return (
    <CenteredScreenDiv gap={20}>
      <Paragraph size={25}>Houve um Erro no carregamento do Sbook. Por favor, contate o suporte.</Paragraph>
    </CenteredScreenDiv>
  );
}
