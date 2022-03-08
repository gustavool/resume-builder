import FormStepFive from '../../components/FormStepFive';
import ProgressBar from '../../components/ProgressBar';
import Certification from '../../components/SVGs/Certification';
import * as S from './styles';

export default function StepFive() {
  return (
    <S.Container>
      <ProgressBar stepOne stepTwo stepThree stepFour stepFive />
      <S.Box>
        <Certification />
        <FormStepFive />
      </S.Box>
    </S.Container>
  );
}
