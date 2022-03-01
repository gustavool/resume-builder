import { PDFDownloadLink } from '@react-pdf/renderer';
import { useSelector } from 'react-redux';

import AddressCard from '../AddressCard';
import BackButton from '../BackButton';
import Button from '../Button';
import CertificationCard from '../CertificationCard';
import GraduationCard from '../GraduationCard';
import OccupationCard from '../OccupationCard';
import PersonalDataCard from '../PersonalDataCard';
import Resume from '../Resume';
import TitleForm from '../TitleForm';
import * as S from './styles';

export default function FormStepSix() {
  const stepOne = useSelector((state) => state.stepOneReducer);
  const stepTwo = useSelector((state) => state.stepTwoReducer);
  const stepThree = useSelector((state) => state.stepThreeReducer);
  const stepFour = useSelector((state) => state.stepFourReducer);
  const stepFive = useSelector((state) => state.stepFiveReducer);

  return (
    <S.Form>
      <PDFDownloadLink fileName='teste' document={<Resume />}>
        {({ loading }) => (loading ? 'Loading document...' : 'Download File')}
      </PDFDownloadLink>
      <BackButton href='http://localhost:3000/StepFive' />

      <TitleForm>Review</TitleForm>

      <div>
        <PersonalDataCard stepData={stepOne} />

        <AddressCard stepData={stepTwo} />

        <OccupationCard stepData={stepThree} />

        <GraduationCard stepData={stepFour} />

        <CertificationCard stepData={stepFive} />
      </div>

      {/* <section>
        <h2>Personal Data</h2>
        <div>
          <p>First Name: {stepOne.firstName}</p>
          <p>Last Name: {stepOne.lastName}</p>
        </div>
        <div>
          <p>Age: {stepOne.age}</p>
          <p>Gender: {stepOne.gender}</p>
        </div>
        <p>Email: {stepOne.email}</p>
      </section> */}

      <Button type='submit'>
        <PDFDownloadLink fileName='teste' document={<Resume />}>
          {({ loading }) => (loading ? 'Loading document...' : 'Generate PDF')}
        </PDFDownloadLink>
      </Button>
      {/* <button onClick={() => handleGeneratePdf()}>Generate</button> */}
    </S.Form>
  );
}
