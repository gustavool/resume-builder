import FormStepOne from '../../components/FormStepOne';
import PersonalData from '../../components/SVGs/PersonalData';
import * as S from './styles';

export default function StepOne() {
  return (
    <S.Container>
      <PersonalData />
      <FormStepOne />
    </S.Container>
  );
}
