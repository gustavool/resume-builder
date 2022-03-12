import FormStepFour from '../../components/FormStepFour';
import ProgressBar from '../../components/ProgressBar';
import Study from '../../components/SVGs/Study';
import * as Page from '../../styles/templates/Page';

export default function StepFour() {
  return (
    <Page.Container>
      <ProgressBar stepOne stepTwo stepThree stepFour />
      <Page.Box>
        <Study height='350' width='350' />
        <FormStepFour />
      </Page.Box>
    </Page.Container>
  );
}
