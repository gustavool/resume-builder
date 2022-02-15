import FormStepTwo from '../../components/FormStepTwo';
import Address from '../../components/SVGs/Address';
import * as S from './styles';

export default function StepTwo() {
  return (
    <S.Container>
      <Address />
      <FormStepTwo />
    </S.Container>
  );
}
