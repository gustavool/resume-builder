import { useSelector } from 'react-redux';

import BackButton from '../BackButton';
import CertificationCard from '../CertificationCard';
import EducationCard from '../EducationCard';
import GeneratePdfButton from '../GeneratePdfButton';
import LocationCard from '../LocationCard';
import PersonalDataCard from '../PersonalDataCard';
import TitleForm from '../TitleForm';
import WorkExperienceCard from '../WorkExperienceCard';
import * as S from './styles';

export default function FormStepSix() {
  const stepOne = useSelector((state) => state.stepOneReducer);
  const stepTwo = useSelector((state) => state.stepTwoReducer);
  const stepThree = useSelector((state) => state.stepThreeReducer);
  const stepFour = useSelector((state) => state.stepFourReducer);
  const stepFive = useSelector((state) => state.stepFiveReducer);

  const allStepsData = {
    stepOne,
    stepTwo,
    stepThree,
    stepFour,
    stepFive,
  };

  return (
    <S.Form>
      <BackButton id='back-button' href='/StepFive' />

      <TitleForm>Review</TitleForm>

      <div>
        <PersonalDataCard stepData={stepOne} />

        <LocationCard stepData={stepTwo} />

        <WorkExperienceCard stepData={stepThree} />

        <EducationCard stepData={stepFour} />

        <CertificationCard stepData={stepFive} />

        <GeneratePdfButton className='generate-button' data={allStepsData} />
      </div>
    </S.Form>
  );
}
