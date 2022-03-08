import FormStepThree from '../../components/FormStepThree';
import ProgressBar from '../../components/ProgressBar';
import Work from '../../components/SVGs/Work';
import * as S from './styles';
export default function StepThree() {
  return (
    <S.Container>
      <ProgressBar stepOne stepTwo stepThree />
      <S.Box>
        <Work height='50%' width='50%' />
        <FormStepThree />
      </S.Box>
    </S.Container>
  );
}
