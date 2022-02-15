import BackButton from '../BackButton';
import Button from '../Button';
import InputText from '../InputText';
import * as S from './styles';

export default function FormStepFour() {
  return (
    <S.Form>
      <BackButton href='http://localhost:3000/StepThree' />
      <InputText placeholder='course name'>Course name</InputText>

      <InputText placeholder='start sate'>Course Start Date</InputText>

      <InputText placeholder='course end date'>Course End Date</InputText>

      <InputText placeholder='college/school'>College/School</InputText>

      <InputText placeholder='course activities'>Course Activities</InputText>

      <Button href='http://localhost:3000/StepFive'>Next</Button>
    </S.Form>
  );
}
