import Button from '../Button';
import TitleForm from '../TitleForm';
import * as S from './styles';
export default function FormIntroduction() {
  return (
    <S.Form>
      <TitleForm>Create your resume very fast and very simple</TitleForm>

      <Button href='http://localhost:3000/StepOne'>Start</Button>
    </S.Form>
  );
}
