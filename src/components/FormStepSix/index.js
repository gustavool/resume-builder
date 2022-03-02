import { useSelector } from 'react-redux';

import AddressCard from '../AddressCard';
import BackButton from '../BackButton';
import CertificationCard from '../CertificationCard';
import GeneratePdfButton from '../GeneratePdfButton';
import GraduationCard from '../GraduationCard';
import OccupationCard from '../OccupationCard';
import PersonalDataCard from '../PersonalDataCard';
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
      <BackButton href='http://localhost:3000/StepFive' />

      <TitleForm>Review</TitleForm>

      <div>
        <PersonalDataCard stepData={stepOne} />

        <AddressCard stepData={stepTwo} />

        <OccupationCard stepData={stepThree} />

        <GraduationCard stepData={stepFour} />

        <CertificationCard stepData={stepFive} />

        <GeneratePdfButton />
      </div>
    </S.Form>
  );
}
