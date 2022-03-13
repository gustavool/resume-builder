import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { changeStepThree } from '../../store/actions/stepThreeActions';
import { stepThreeSchema } from '../../yup/schemas';
import BackButton from '../BackButton';
import Button from '../Button';
import InputDate from '../InputDate';
import InputText from '../InputText';
import TitleForm from '../TitleForm';
import * as S from './styles';

export default function FormStepThree() {
  const dispatch = useDispatch();

  const stepThree = useSelector((state) => state.stepThreeReducer);

  const {
    register,
    formState: { errors, isValid },
  } = useForm({
    mode: 'all',
    resolver: yupResolver(stepThreeSchema),
  });

  function handleInputChange(e) {
    if (stepThree[e.target.name] !== e.target.value) {
      dispatch(
        changeStepThree({ ...stepThree, [e.target.name]: e.target.value })
      );
    }
  }

  return (
    <S.Form>
      <BackButton id='back-button' href='/StepTwo' />

      <TitleForm>Work Experience</TitleForm>

      <div className='double-fields'>
        <InputText
          name='occupation'
          placeholder='occupation'
          maxLength='50'
          defaultValue={stepThree.occupation}
          onBlur={handleInputChange}
          register={register}
          error={errors.occupation}
        >
          Occupation
        </InputText>

        <InputText
          name='employer'
          placeholder='employer'
          maxLength='50'
          defaultValue={stepThree.employer}
          onBlur={handleInputChange}
          register={register}
          error={errors.employer}
        >
          Employer
        </InputText>
      </div>

      <div className='double-fields'>
        <InputDate
          name='startDate'
          defaultValue={stepThree.startDate}
          onChange={handleInputChange}
          register={register}
          error={errors.startDate}
        >
          Start Date
        </InputDate>

        <InputDate
          name='endDate'
          defaultValue={stepThree.endDate}
          onChange={handleInputChange}
          min={stepThree.startDate}
          disabled={stepThree.startDate === ''}
          register={register}
          error={errors.endDate}
        >
          End Date
        </InputDate>
      </div>

      <InputText
        name='activities'
        placeholder='occupation activities'
        maxLength='200'
        defaultValue={stepThree.activities}
        onBlur={handleInputChange}
        register={register}
        error={errors.activities}
      >
        Activities
      </InputText>

      <Button href='/StepFour' disabled={!isValid}>
        Next
      </Button>
    </S.Form>
  );
}
