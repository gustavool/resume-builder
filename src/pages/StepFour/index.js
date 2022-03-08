import FormStepFour from '../../components/FormStepFour';
import ProgressBar from '../../components/ProgressBar';
import Study from '../../components/SVGs/Study';
import * as S from './styles';

export default function StepFour() {
  return (
    <S.Container>
      <ProgressBar stepOne stepTwo stepThree stepFour />
      <S.Box>
        <Study height='350' width='350' />
        <FormStepFour />
      </S.Box>
    </S.Container>
  );
}
