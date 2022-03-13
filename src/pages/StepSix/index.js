import FormStepSix from '../../components/FormStepSix';
import ProgressBar from '../../components/ProgressBar';
import Check from '../../components/SVGs/Check';
import * as CheckPage from '../../styles/templates/CheckPage';

export default function StepSix() {
  return (
    <CheckPage.Container>
      <ProgressBar stepOne stepTwo stepThree stepFour stepFive stepSix />
      <CheckPage.Box>
        <Check />
        <FormStepSix />
      </CheckPage.Box>
    </CheckPage.Container>
  );
}
