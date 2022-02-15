import BackButton from '../BackButton';
import Button from '../Button';
import InputText from '../InputText';
import * as S from './styles';

export default function FormStepThree() {
  return (
    <S.Form>
      <BackButton href='http://localhost:3000/StepTwo' />
      <InputText placeholder='occupation'>Occupation</InputText>

      <InputText placeholder='start date'>Occupation Start Date</InputText>

      <InputText placeholder='end data position'>End data position</InputText>

      <InputText placeholder='employeer'>Employeer</InputText>

      <InputText placeholder='occupation activities'>
        Occupation Activities
      </InputText>

      <Button href='http://localhost:3000/StepFour'>Next</Button>
    </S.Form>
  );
}
