import FormStepSix from '../../components/FormStepSix';
import ProgressBar from '../../components/ProgressBar';
import Check from '../../components/SVGs/Check';
import * as S from './styles';

export default function StepSix() {
  return (
    <S.Container>
      <ProgressBar stepOne stepTwo stepThree stepFour stepFive stepSix />
      <S.Box>
        <Check />
        <FormStepSix />
      </S.Box>
    </S.Container>
  );
}
