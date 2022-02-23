import { useDispatch, useSelector } from 'react-redux';

import { ChangeStepFour } from '../../store/actions/stepFour.action';
import BackButton from '../BackButton';
import Button from '../Button';
import InputDate from '../InputDate';
import InputText from '../InputText';
import TitleForm from '../TitleForm';
import * as S from './styles';

export default function FormStepFour() {
  const dispatch = useDispatch();

  const stepFour = useSelector((state) => state.StepFourReducer);

  function handleInputChange(e) {
    if (stepFour[e.target.name] !== e.target.value) {
      dispatch(
        ChangeStepFour({ ...stepFour, [e.target.name]: e.target.value })
      );
    }
  }

  return (
    <S.Form>
      <BackButton href='http://localhost:3000/StepThree' />

      <TitleForm>Graduations</TitleForm>

      <div className='doubleFields'>
        <InputText
          name='name'
          placeholder='course name'
          maxLength='50'
          defaultValue={stepFour.name}
          onBlur={handleInputChange}
        >
          Course name
        </InputText>
        <InputText
          name='collegeSchool'
          placeholder='college/school'
          maxLength='50'
          defaultValue={stepFour.collegeSchool}
          onBlur={handleInputChange}
        >
          College/School
        </InputText>
      </div>

      <div className='doubleFields'>
        <InputDate
          name='startDate'
          onChange={handleInputChange}
          defaultValue={stepFour.startDate}
        >
          Start Date
        </InputDate>
        <InputDate
          name='endDate'
          defaultValue={stepFour.endDate}
          onChange={handleInputChange}
          min={stepFour.startDate}
          disabled={stepFour.startDate === ''}
        >
          End Date
        </InputDate>
      </div>

      <InputText
        className='oneField'
        name='activities'
        placeholder='course activities'
        maxLength='200'
        defaultValue={stepFour.activities}
        onBlur={handleInputChange}
      >
        Activities
      </InputText>

      <Button href='http://localhost:3000/StepFive'>Next</Button>
    </S.Form>
  );
}
