/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ChangeStepTwo } from '../../store/actions/stepTwo.action';
import BackButton from '../BackButton';
import Button from '../Button';
import InputNumber from '../InputNumber';
import InputSelect from '../InputSelect';
import InputText from '../InputText';
import * as S from './styles';

export default function FormStepTwo() {
  const [states, setStates] = useState([]);

  const dispatch = useDispatch();

  const stepTwo = useSelector((state) => state.StepTwoReducer);

  const [countriesAndStates, setCountriesAndStates] = useState(null);
  const [errorCountriesAndStates, setErrorCountriesAndStates] = useState(null);
  const [isLoadingCountriesAndStates, setIsLoadingCountriesAndStates] =
    useState(true);

  useEffect(() => {
    fetch('https://countriesnow.space/api/v0.1/countries/states')
      .then(async (response) => {
        const json = await response.json();
        setCountriesAndStates(json.data);
      })
      .catch((error) => {
        setErrorCountriesAndStates(error);
      })
      .finally(() => {
        setIsLoadingCountriesAndStates(false);
      });
  }, []);

  const [cities, setCities] = useState(null);
  const [errorCities, setErrorCities] = useState(null);
  const [isLoadingCities, setIsLoadingCities] = useState(true);

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      country: stepTwo.country,
      state: stepTwo.state,
    }),
  };

  useEffect(() => {
    if (stepTwo.state !== '') {
      fetch(
        'https://countriesnow.space/api/v0.1/countries/state/cities',
        requestOptions
      )
        .then(async (response) => {
          const json = await response.json();
          console.log('data POST', json.data);
          setCities(json.data);
        })
        .catch((error) => {
          setErrorCities(error);
        })
        .finally(() => {
          setIsLoadingCities(false);
        });
    }
  }, [stepTwo.state]);

  useEffect(() => {
    const countrySelected = countriesAndStates?.find((country) => {
      return country.name === stepTwo.country;
    });

    console.log('countrySelected', countrySelected);

    setStates(countrySelected?.states);
    setCities(null); //clear cities
  }, [stepTwo.country]);

  function handleInputChange(e) {
    if (stepTwo[e.target.name] !== e.target.value) {
      dispatch(ChangeStepTwo({ ...stepTwo, [e.target.name]: e.target.value }));
    }
  }

  return (
    <S.Form>
      <BackButton href='http://localhost:3000/StepOne' />

      <div className='doubleFields'>
        <InputNumber
          name='number'
          placeholder='000000'
          maxLength='6'
          defaultValue={stepTwo.number}
          onBlur={handleInputChange}
        >
          Number
        </InputNumber>

        <InputSelect
          name='country'
          label='Country'
          placeholder='Select a country'
          optionsList={countriesAndStates}
          defaultValue={stepTwo.country}
          onBlur={handleInputChange}
        />
      </div>

      <InputText
        className='oneField'
        name='address'
        placeholder='av...'
        maxLength='80'
        onBlur={handleInputChange}
      >
        Address
      </InputText>

      <div className='doubleFields'>
        <InputSelect
          name='state'
          label='State'
          placeholder={
            states?.length === 0 ? 'States not found' : 'Select a state'
          }
          optionsList={states}
          disabled={states?.length === 0}
          defaultValue={stepTwo.state}
          onBlur={handleInputChange}
        />

        <InputSelect
          name='city'
          label='City'
          placeholder={
            cities?.length === 0 ? 'Cities not found' : 'Select a city'
          }
          optionsList={cities}
          disabled={cities?.length === 0}
          defaultValue={stepTwo.city}
          onBlur={handleInputChange}
        />
      </div>

      <Button href='http://localhost:3000/StepThree'>Next</Button>
    </S.Form>
  );
}
