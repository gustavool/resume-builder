import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { ChangeStepOne } from '../../store/actions/StepOne.action';
import Button from '../Button';
import * as S from './styles';

export default function FormStepOne() {
  const dispatch = useDispatch();

  const stepOne = useSelector((state) => state.StepOneReducer);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function handleInputChange(e) {
    dispatch(ChangeStepOne({ ...stepOne, [e.target.name]: e.target.value }));
  }
  console.log(stepOne);

  const onSubmit = (data) => console.log(data);

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <label>
        First Name
        <input
          name='firstName'
          {...register('firstName', {
            onChange: handleInputChange,
            required: true,
          })}
        />
      </label>

      {errors.firstName && <span>This firstName is required</span>}

      <label>
        Last Name
        <input
          name='lastName'
          {...register('lastName', {
            onChange: handleInputChange,
            required: true,
          })}
        />
      </label>

      {errors.lastName && <span>This lastName is required</span>}

      <label>
        Age
        <input
          name='age'
          {...register('age', {
            onChange: handleInputChange,
            required: true,
          })}
        />
      </label>

      {errors.age && <span>This age is required</span>}

      <label>
        Email
        <input
          name='email'
          {...register('email', {
            onChange: handleInputChange,
            required: true,
          })}
        />
      </label>

      {errors.email && <span>This email is required</span>}

      <Button href='http://localhost:3000/StepTwo'>Next</Button>
    </S.Form>
  );
}
