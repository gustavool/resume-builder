import FormStepThree from '../../components/FormStepThree';
import ProgressBar from '../../components/ProgressBar';
import Work from '../../components/SVGs/Work';
import * as Page from '../../styles/templates/Page';

export default function StepThree() {
  return (
    <Page.Container>
      <ProgressBar stepOne stepTwo stepThree />
      <Page.Box>
        <Work height='50%' width='50%' />
        <FormStepThree />
      </Page.Box>
    </Page.Container>
  );
}
