import { useDispatch, useSelector } from 'react-redux';

import { ChangeStepFive } from '../../store/actions/stepFive.action';
import BackButton from '../BackButton';
import Button from '../Button';
import InputDate from '../InputDate';
import InputText from '../InputText';
import TitleForm from '../TitleForm';
import * as S from './styles';

export default function FormStepFive() {
  const dispatch = useDispatch();

  const stepFive = useSelector((state) => state.StepFiveReducer);

  function handleInputChange(e) {
    if (stepFive[e.target.name] !== e.target.value) {
      dispatch(
        ChangeStepFive({ ...stepFive, [e.target.name]: e.target.value })
      );
    }
  }

  return (
    <S.Form>
      <BackButton href='http://localhost:3000/StepFour' />

      <TitleForm>Certifications</TitleForm>

      <div className='doubleFields'>
        <InputText
          name='name'
          placeholder='name'
          maxLength='50'
          defaultValue={stepFive.name}
          onBlur={handleInputChange}
        >
          Name
        </InputText>

        <InputDate
          name='date'
          placeholder='date'
          defaultValue={stepFive.date}
          onBlur={handleInputChange}
        >
          Date
        </InputDate>
      </div>

      <InputText
        className='oneField'
        name='linkUrl'
        placeholder='link/url'
        onBlur={handleInputChange}
        defaultValue={stepFive.linkUrl}
        maxLength='50'
      >
        Link/url
      </InputText>

      <InputText
        className='oneField'
        name='description'
        placeholder='description'
        onBlur={handleInputChange}
        defaultValue={stepFive.description}
        maxLength='200'
      >
        Description
      </InputText>

      <Button href='#'>Next</Button>
    </S.Form>
  );
}
