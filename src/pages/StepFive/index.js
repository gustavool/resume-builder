import FormStepFive from '../../components/FormStepFive';
import ProgressBar from '../../components/ProgressBar';
import Certification from '../../components/SVGs/Certification';
import * as Page from '../../styles/templates/Page';

export default function StepFive() {
  return (
    <Page.Container>
      <ProgressBar stepOne stepTwo stepThree stepFour stepFive />
      <Page.Box>
        <Certification />
        <FormStepFive />
      </Page.Box>
    </Page.Container>
  );
}
