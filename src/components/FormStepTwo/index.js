/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import useFetch from '../../hooks/useFetch';
import { ChangeStepTwo } from '../../store/actions/stepTwo.action';
import BackButton from '../BackButton';
import Button from '../Button';
import InputSelect from '../InputSelect';
import InputText from '../InputText';
import * as S from './styles';

export default function FormStepTwo() {
  // eslint-disable-next-line no-unused-vars
  const [countriesAndStates, setCountriesAndStates] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const dispatch = useDispatch();

  const stepTwo = useSelector((state) => state.StepTwoReducer);

  const {
    isLoading: countriesIsLoading,
    value: countriesList,
    error: countriesError,
  } = useFetch('https://countriesnow.space/api/v0.1/countries/states');

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      country: stepTwo.country,
      state: stepTwo.state,
    }),
  };

  const {
    isLoading: citiesIsLoading,
    value: citiesList,
    error: citiesError,
  } = useFetch(
    'https://countriesnow.space/api/v0.1/countries/state/cities',
    requestOptions
  );

  function handleInputChange(e) {
    dispatch(ChangeStepTwo({ ...stepTwo, [e.target.name]: e.target.value }));
  }

  useEffect(() => {
    setCountriesAndStates(countriesList?.data);
  }, [countriesList]);

  useEffect(() => {
    const countrySelected = countriesAndStates?.find((country) => {
      return country.name === stepTwo.country;
    });

    setStates(countrySelected?.states);
  }, [stepTwo.country]);

  useEffect(() => {
    console.log('entrou effect');
    setCities(citiesList?.data);
  }, [stepTwo.state]);

  console.log('redux', stepTwo);

  return (
    <S.Form>
      <BackButton href='http://localhost:3000/StepOne' />

      <div className='doubleFields'>
        <InputText placeholder='0000'>Number</InputText>
        <InputSelect
          name='country'
          label='Country'
          placeholder='Select a country'
          optionsList={countriesAndStates}
          handleInputChange={handleInputChange}
        />
      </div>

      <InputText placeholder='av...'>Address</InputText>

      <div className='doubleFields'>
        <InputSelect
          name='state'
          label='State'
          placeholder={
            states?.length === 0 ? 'States not found' : 'Select a state'
          }
          optionsList={states}
          handleInputChange={handleInputChange}
          disabled={states?.length === 0}
        />

        <InputSelect
          name='city'
          label='City'
          placeholder={
            cities?.length === 0 ? 'Cities not found' : 'Select a city'
          }
          optionsList={cities}
          handleInputChange={handleInputChange}
          // disabled={states?.length === 0}
        />
      </div>

      <Button href='http://localhost:3000/StepThree'>Next</Button>
    </S.Form>
  );
}
