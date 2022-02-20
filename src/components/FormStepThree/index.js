import { useDispatch, useSelector } from 'react-redux';

import { ChangeStepThree } from '../../store/actions/stepThree.action';
import BackButton from '../BackButton';
import Button from '../Button';
import InputDate from '../InputDate';
import InputText from '../InputText';
import * as S from './styles';

export default function FormStepThree() {
  const dispatch = useDispatch();

  const stepThree = useSelector((state) => state.StepThreeReducer);

  function handleInputChange(e) {
    if (stepThree[e.target.name] !== e.target.value) {
      dispatch(
        ChangeStepThree({ ...stepThree, [e.target.name]: e.target.value })
      );
    }
  }

  return (
    <S.Form>
      <BackButton href='http://localhost:3000/StepTwo' />
      <div className='doubleFields'>
        <InputText
          name='occupation'
          placeholder='occupation'
          maxLength='50'
          value={stepThree.occupation}
          onBlur={handleInputChange}
        >
          Occupation
        </InputText>

        <InputText
          name='employer'
          placeholder='employer'
          maxLength='50'
          value={stepThree.employer}
          onBlur={handleInputChange}
        >
          Employer
        </InputText>
      </div>

      <div className='doubleFields'>
        <InputDate
          name='startDate'
          value={stepThree.startDate}
          onBlur={handleInputChange}
        >
          Start Date
        </InputDate>

        <InputDate
          name='endDate'
          value={stepThree.endDate}
          onBlur={handleInputChange}
        >
          End Date
        </InputDate>
      </div>

      <InputText
        className='oneField'
        name='activities'
        placeholder='occupation activities'
        maxLength='200'
        value={stepThree.activities}
        onBlur={handleInputChange}
      >
        Activities
      </InputText>

      <Button href='http://localhost:3000/StepFour'>Next</Button>
    </S.Form>
  );
}
