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

  console.log('allStepsData', allStepsData);

  return (
    <S.Form>
      <BackButton href='http://localhost:3000/StepFive' />

      <TitleForm>Review</TitleForm>

      <div>
        <PersonalDataCard stepData={stepOne} />

        <LocationCard stepData={stepTwo} />

        <WorkExperienceCard stepData={stepThree} />

        <EducationCard stepData={stepFour} />

        <CertificationCard stepData={stepFive} />

        <GeneratePdfButton data={allStepsData} />
      </div>
    </S.Form>
  );
}
