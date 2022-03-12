import FormStepOne from '../../components/FormStepOne';
import ProgressBar from '../../components/ProgressBar';
import PersonalData from '../../components/SVGs/PersonalData';
import * as Page from '../../styles/templates/Page';

export default function StepOne() {
  return (
    <Page.Container>
      <ProgressBar stepOne />
      <Page.Box>
        <PersonalData />
        <FormStepOne />
      </Page.Box>
    </Page.Container>
  );
}
