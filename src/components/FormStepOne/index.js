import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { changeStepOne } from '../../store/actions/stepOneActions';
import { stepOneSchema } from '../../yup/schemas';
import BackButton from '../BackButton';
import Button from '../Button';
import InputNumber from '../InputNumber';
import InputSelect from '../InputSelect';
import InputText from '../InputText';
import TitleForm from '../TitleForm';
import * as S from './styles';
export default function FormStepOne() {
  const dispatch = useDispatch();

  const stepOne = useSelector((state) => state.stepOneReducer);
  const genders = ['Male', 'Female', 'Other'];

  const {
    register,
    formState: { errors, isValid },
  } = useForm({
    mode: 'all',
    resolver: yupResolver(stepOneSchema),
  });

  function handleInputChange(e) {
    if (stepOne[e.target.name] !== e.target.value) {
      dispatch(changeStepOne({ ...stepOne, [e.target.name]: e.target.value }));
    }
  }

  return (
    <S.Form>
      <BackButton href='http://localhost:3000/' />

      <TitleForm>Personal Data</TitleForm>

      <div className='doubleFields'>
        <InputText
          name='firstName'
          placeholder='first name'
          maxLength='50'
          defaultValue={stepOne.firstName}
          onBlur={handleInputChange}
          register={register}
          error={errors.firstName}
        >
          First Name
        </InputText>

        <InputText
          name='lastName'
          placeholder='last name'
          maxLength='50'
          defaultValue={stepOne.lastName}
          onBlur={handleInputChange}
          register={register}
          error={errors.lastName}
        >
          Last Name
        </InputText>
      </div>

      <div className='doubleFields'>
        <InputNumber
          name='age'
          placeholder='age'
          maxLength='3'
          defaultValue={stepOne.age}
          onBlur={handleInputChange}
          register={register}
          error={errors.age}
        >
          Age
        </InputNumber>

        <InputSelect
          name='gender'
          label='Gender'
          placeholder='select a gender'
          options={genders}
          defaultValue={stepOne.gender}
          onChange={handleInputChange}
          register={register}
          error={errors.gender}
        />
      </div>

      <InputText
        className='oneField'
        name='email'
        placeholder='email'
        maxLength='50'
        defaultValue={stepOne.email}
        onBlur={handleInputChange}
        register={register}
        error={errors.email}
      >
        Email
      </InputText>

      <Button href='http://localhost:3000/StepTwo' disabled={!isValid}>
        Next
      </Button>
    </S.Form>
  );
}
