import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { changeStepFour } from '../../store/actions/stepFourActions';
import { stepFourSchema } from '../../yup/schemas';
import BackButton from '../BackButton';
import Button from '../Button';
import InputDate from '../InputDate';
import InputText from '../InputText';
import TitleForm from '../TitleForm';
import * as S from './styles';

export default function FormStepFour() {
  const dispatch = useDispatch();

  const stepFour = useSelector((state) => state.stepFourReducer);

  const {
    register,
    formState: { errors, isValid },
  } = useForm({
    mode: 'all',
    resolver: yupResolver(stepFourSchema),
  });

  function handleInputChange(e) {
    if (stepFour[e.target.name] !== e.target.value) {
      dispatch(
        changeStepFour({ ...stepFour, [e.target.name]: e.target.value })
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
          register={register}
          error={errors.name}
        >
          Course name
        </InputText>
        <InputText
          name='collegeSchool'
          placeholder='college/school'
          maxLength='50'
          defaultValue={stepFour.collegeSchool}
          onBlur={handleInputChange}
          register={register}
          error={errors.collegeSchool}
        >
          College/School
        </InputText>
      </div>

      <div className='doubleFields'>
        <InputDate
          name='startDate'
          onChange={handleInputChange}
          defaultValue={stepFour.startDate}
          register={register}
          error={errors.startDate}
        >
          Start Date
        </InputDate>
        <InputDate
          name='endDate'
          defaultValue={stepFour.endDate}
          onChange={handleInputChange}
          min={stepFour.startDate}
          disabled={stepFour.startDate === ''}
          register={register}
          error={errors.endDate}
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
        register={register}
        error={errors.activities}
      >
        Activities
      </InputText>

      <Button href='http://localhost:3000/StepFive' disabled={!isValid}>
        Next
      </Button>
    </S.Form>
  );
}
