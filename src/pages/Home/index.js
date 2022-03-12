import FormIntroduction from '../../components/FormIntroduction';
import ProgressBar from '../../components/ProgressBar';
import Resume from '../../components/SVGs/Resume';
import * as Page from '../../styles/templates/Page';

export default function Index() {
  return (
    <Page.Container>
      <ProgressBar />
      <Page.Box>
        <Resume />
        <FormIntroduction />
      </Page.Box>
    </Page.Container>
  );
}
