import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { changeStepFive } from '../../store/actions/stepFiveActions';
import { stepFiveSchema } from '../../yup/schemas';
import BackButton from '../BackButton';
import Button from '../Button';
import InputDate from '../InputDate';
import InputText from '../InputText';
import TitleForm from '../TitleForm';
import * as S from './styles';
export default function FormStepFive() {
  const dispatch = useDispatch();

  const stepFive = useSelector((state) => state.stepFiveReducer);

  const {
    register,
    formState: { errors, isValid },
  } = useForm({
    mode: 'all',
    resolver: yupResolver(stepFiveSchema),
  });

  function handleInputChange(e) {
    if (stepFive[e.target.name] !== e.target.value) {
      dispatch(
        changeStepFive({ ...stepFive, [e.target.name]: e.target.value })
      );
    }
  }

  return (
    <S.Form>
      <BackButton id='back-button' href='/StepFour' />

      <TitleForm>Certification</TitleForm>

      <div className='doubleFields'>
        <InputText
          name='name'
          placeholder='name'
          maxLength='50'
          defaultValue={stepFive.name}
          onBlur={handleInputChange}
          register={register}
          error={errors.name}
        >
          Name
        </InputText>

        <InputDate
          name='date'
          placeholder='date'
          defaultValue={stepFive.date}
          onChange={handleInputChange}
          register={register}
          error={errors.date}
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
        isOptional={true}
        maxLength='50'
        register={register}
        error={errors.linkUrl}
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
        register={register}
        error={errors.description}
      >
        Description
      </InputText>

      <Button href='/StepSix' disabled={!isValid}>
        Next
      </Button>
    </S.Form>
  );
}
