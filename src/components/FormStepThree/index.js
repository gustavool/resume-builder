import { useDispatch, useSelector } from 'react-redux';

import { changeStepThree } from '../../store/actions/stepThreeActions';
import BackButton from '../BackButton';
import Button from '../Button';
import InputDate from '../InputDate';
import InputText from '../InputText';
import TitleForm from '../TitleForm';
import * as S from './styles';

export default function FormStepThree() {
  const dispatch = useDispatch();

  const stepThree = useSelector((state) => state.stepThreeReducer);

  function handleInputChange(e) {
    if (stepThree[e.target.name] !== e.target.value) {
      dispatch(
        changeStepThree({ ...stepThree, [e.target.name]: e.target.value })
      );
    }
  }

  return (
    <S.Form>
      <BackButton href='http://localhost:3000/StepTwo' />

      <TitleForm>Work Experience</TitleForm>

      <div className='doubleFields'>
        <InputText
          name='occupation'
          placeholder='occupation'
          maxLength='50'
          defaultValue={stepThree.occupation}
          onBlur={handleInputChange}
        >
          Occupation
        </InputText>

        <InputText
          name='employer'
          placeholder='employer'
          maxLength='50'
          defaultValue={stepThree.employer}
          onBlur={handleInputChange}
        >
          Employer
        </InputText>
      </div>

      <div className='doubleFields'>
        <InputDate
          name='startDate'
          defaultValue={stepThree.startDate}
          onChange={handleInputChange}
        >
          Start Date
        </InputDate>

        <InputDate
          name='endDate'
          defaultValue={stepThree.endDate}
          onChange={handleInputChange}
          min={stepThree.startDate}
          disabled={stepThree.startDate === ''}
        >
          End Date
        </InputDate>
      </div>

      <InputText
        className='oneField'
        name='activities'
        placeholder='occupation activities'
        maxLength='200'
        defaultValue={stepThree.activities}
        onBlur={handleInputChange}
      >
        Activities
      </InputText>

      <Button href='http://localhost:3000/StepFour'>Next</Button>
    </S.Form>
  );
}
