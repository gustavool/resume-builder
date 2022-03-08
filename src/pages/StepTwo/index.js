import FormStepTwo from '../../components/FormStepTwo';
import ProgressBar from '../../components/ProgressBar';
import Address from '../../components/SVGs/Address';
import * as S from './styles';

export default function StepTwo() {
  return (
    <S.Container>
      <ProgressBar stepOne stepTwo />
      <S.Box>
        <Address height='300' width='300' />
        <FormStepTwo />
      </S.Box>
    </S.Container>
  );
}
