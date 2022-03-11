import FormStepOne from '../../components/FormStepOne';
import ProgressBar from '../../components/ProgressBar';
import PersonalData from '../../components/SVGs/PersonalData';
import * as S from './styles';

export default function StepOne() {
  return (
    <S.Container>
      <ProgressBar stepOne />
      <S.Box>
        <PersonalData />
        <FormStepOne />
      </S.Box>
    </S.Container>
  );
}
