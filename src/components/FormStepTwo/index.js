import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { getCities } from '../../store/actions/citiesActions';
import { getCountriesStates } from '../../store/actions/countriesAndStatesActions';
import { changeStepTwo } from '../../store/actions/stepTwoActions';
import { stepTwoSchema } from '../../yup/schemas';
import BackButton from '../BackButton';
import Button from '../Button';
import CitySelect from '../CitySelect';
import CountrySelect from '../CountrySelect';
import InputNumber from '../InputNumber';
import InputText from '../InputText';
import StateSelect from '../StateSelect';
import TitleForm from '../TitleForm';
import * as S from './styles';
export default function FormStepTwo() {
  const [citiesOptions, setCitiesOptions] = useState([]);
  const [countriesOptions, setCountriesOptions] = useState([]);
  const [statesOptions, setStatesOptions] = useState([]);
  const [isValidSelectedOptions, setIsValidSelectedOptions] = useState(null);

  const dispatch = useDispatch();
  const stepTwo = useSelector((state) => state.stepTwoReducer);
  const countriesAndStates = useSelector(
    (state) => state.countriesAndStatesReducer
  );
  const cities = useSelector((state) => state.citiesReducer);

  const {
    register,
    formState: { errors, isValid },
  } = useForm({
    mode: 'all',
    resolver: yupResolver(stepTwoSchema),
  });

  useEffect(() => {
    if (!countriesAndStates || countriesAndStates.data.length === 0) {
      dispatch(getCountriesStates());
    }
  }, []);

  useEffect(() => {
    if (countriesAndStates) {
      setCountriesOptions(countriesAndStates.data);
    }
  }, [countriesAndStates]);

  useEffect(() => {
    if (Array.isArray(countriesAndStates.data)) {
      const countrySelected = countriesAndStates.data.find(
        (country) => country.name === stepTwo?.country
      );

      setCitiesOptions([]);

      countrySelected?.states?.length > 0
        ? setStatesOptions(countrySelected.states)
        : setStatesOptions([]);
    }
  }, [stepTwo.country]);

  useEffect(() => {
    const isStateChanged = cities.msg.includes(stepTwo.state);
    if (stepTwo.state !== '' && !isStateChanged) {
      setCitiesOptions([]); //clear cities options
      dispatch(getCities(stepTwo.country, stepTwo.state));
      if (stepTwo.city !== '') {
        dispatch(changeStepTwo({ ...stepTwo, city: '' }));
      }
    }
  }, [stepTwo.state]);

  useEffect(() => {
    if (Array.isArray(cities.data) && cities.data.length > 0) {
      setCitiesOptions(cities.data);
    } else {
      setCitiesOptions([]);
    }
  }, [cities]);

  useEffect(() => {
    setIsValidSelectedOptions(checkIfValuesHasSelectedCorrectly());
  }, [
    stepTwo.country,
    statesOptions,
    citiesOptions,
    stepTwo.state,
    stepTwo.city,
  ]);

  function handleInputChange(e) {
    if (stepTwo[e.target.name] !== e.target.value) {
      dispatch(changeStepTwo({ ...stepTwo, [e.target.name]: e.target.value }));
    }
  }

  function checkIfValuesHasSelectedCorrectly() {
    if (stepTwo.country !== '' && statesOptions.length === 0) {
      return true;
    }

    if (
      stepTwo.country !== '' &&
      stepTwo.state !== '' &&
      citiesOptions.length === 0
    ) {
      return true;
    }

    if (stepTwo.country !== '' && stepTwo.state !== '' && stepTwo.city !== '') {
      return true;
    }

    return false;
  }

  return (
    <S.Form>
      <BackButton href='http://localhost:3000/StepOne' />

      <TitleForm>Location</TitleForm>

      <div className='doubleFields'>
        <InputNumber
          name='number'
          placeholder='000000'
          maxLength='6'
          defaultValue={stepTwo?.number || ''}
          onBlur={handleInputChange}
          register={register}
          error={errors.number}
        >
          Number
        </InputNumber>

        <CountrySelect
          options={countriesOptions}
          register={register}
          error={errors.country}
        />
      </div>

      <InputText
        className='oneField'
        name='address'
        placeholder='av...'
        maxLength='80'
        defaultValue={stepTwo?.address}
        onBlur={handleInputChange}
        register={register}
        error={errors.address}
      >
        Address
      </InputText>

      <div className='doubleFields'>
        <StateSelect
          options={statesOptions}
          register={register}
          error={errors.state}
        />

        <CitySelect
          options={citiesOptions}
          register={register}
          error={errors.state}
        />
      </div>

      <Button
        href='http://localhost:3000/StepThree'
        disabled={!isValid || !isValidSelectedOptions}
      >
        Next
      </Button>
    </S.Form>
  );
}
