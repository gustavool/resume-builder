import BackButton from '../BackButton';
import Button from '../Button';
import InputText from '../InputText';
import * as S from './styles';

export default function FormStepFive() {
  return (
    <S.Form>
      <BackButton href='http://localhost:3000/StepFour' />

      <InputText placeholder='name'>Certification name</InputText>

      <InputText placeholder='date'>Certification Date</InputText>

      <InputText placeholder='description'>Certification Description</InputText>

      <InputText placeholder='link/url'>Certification link/url</InputText>

      <Button href='#'>Next</Button>
    </S.Form>
  );
}
