import { Heading } from '@/components/UI/Heading';
import { Paragraph } from '@/components/UI/Paragraph';
import { CenteredScreenDiv } from '@/components/UI/CenteredDiv';
import { SbookHead } from '@/components/SbookHead';

export default function PageNotFound() {
  return (
    <>
      <SbookHead title="Página não Encontrada" />
      <CenteredScreenDiv>
        <Heading size={125}>404</Heading>
        <Paragraph size={25}>Esta página não foi encontrada</Paragraph>
      </CenteredScreenDiv>
    </>
  );
}
