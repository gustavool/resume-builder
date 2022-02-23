import { useSelector } from 'react-redux';

import AddressCard from '../AddressCard';
import BackButton from '../BackButton';
import Button from '../Button';
import CertificationCard from '../CertificationCard';
import GraduationCard from '../GraduationCard';
import OccupationCard from '../OccupationCard';
import PersonalDataCard from '../PersonalDataCard';
import TitleForm from '../TitleForm';
import * as S from './styles';

export default function FormStepSix() {
  const stepOne = useSelector((state) => state.StepOneReducer);
  const stepTwo = useSelector((state) => state.StepTwoReducer);
  const stepThree = useSelector((state) => state.StepThreeReducer);
  const stepFour = useSelector((state) => state.StepFourReducer);
  const stepFive = useSelector((state) => state.StepFiveReducer);

  return (
    <S.Form>
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

      <Button href='#'>Next</Button>
    </S.Form>
  );
}
