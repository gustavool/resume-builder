import FormStepTwo from '../../components/FormStepTwo';
import ProgressBar from '../../components/ProgressBar';
import Address from '../../components/SVGs/Address';
import * as Page from '../../styles/templates/Page';

export default function StepTwo() {
  return (
    <Page.Container>
      <ProgressBar stepOne stepTwo />
      <Page.Box>
        <Address height='300' width='300' />
        <FormStepTwo />
      </Page.Box>
    </Page.Container>
  );
}
