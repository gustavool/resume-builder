// import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { changeStepOne } from '../../store/actions/stepOneActions';
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

  // const {
  //   register,
  //   formState: { errors },
  // } = useForm();

  function handleInputChange(e) {
    if (stepOne[e.target.name] !== e.target.value) {
      dispatch(changeStepOne({ ...stepOne, [e.target.name]: e.target.value }));
    }
  }

  return (
    <S.Form>
      <TitleForm>Personal Data</TitleForm>

      <div className='doubleFields'>
        <InputText
          name='firstName'
          placeholder='first name'
          maxLength='50'
          defaultValue={stepOne.firstName}
          onBlur={handleInputChange}
        >
          First Name
        </InputText>
        {/* {errors.firstName && <span>This firstName is required</span>} */}
        <InputText
          name='lastName'
          placeholder='last name'
          maxLength='50'
          defaultValue={stepOne.lastName}
          onBlur={handleInputChange}
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
        >
          Age
        </InputNumber>

        <InputSelect
          name='gender'
          label='Gender'
          placeholder='select a gender'
          optionsList={genders}
          defaultValue={stepOne.gender}
          onBlur={handleInputChange}
        />
      </div>

      <InputText
        className='oneField'
        name='email'
        placeholder='email'
        maxLength='50'
        defaultValue={stepOne.email}
        onBlur={handleInputChange}
      >
        Email
      </InputText>

      <Button href='http://localhost:3000/StepTwo'>Next</Button>
    </S.Form>
  );
}
