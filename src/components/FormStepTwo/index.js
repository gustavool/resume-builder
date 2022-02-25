/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { useQuery, useMutation } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';

import { ChangeStepTwo } from '../../store/actions/stepTwo.action';
import BackButton from '../BackButton';
import Button from '../Button';
import InputNumber from '../InputNumber';
import InputSelect from '../InputSelect';
import InputText from '../InputText';
import SelectInput from '../SelectInput';
import TitleForm from '../TitleForm';
import * as S from './styles';

export default function FormStepTwo() {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [countriesAndStates, setCountriesAndStates] = useState([]);

  const dispatch = useDispatch();

  const stepTwo = useSelector((state) => state.StepTwoReducer);

  const { isLoading, error, data } = useQuery(
    'countriesAndStates',
    async () => {
      const response = await fetch(
        'https://countriesnow.space/api/v0.1/countries/states'
      );

      const json = await response.json();

      return json;
    },
    {
      staleTime: 1000 * 60 * 30, // 30 minutes
    }
  );

  useEffect(() => {
    if (data) {
      const countries = data.data.map((country) => {
        return {
          value: country.iso3,
          label: country.name,
        };
      });

      setCountriesAndStates(countries);
    }
  }, [data]);

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      country: stepTwo.country,
      state: stepTwo.state,
    }),
  };

  const { mutate, data: dataMut } = useMutation(() => {
    return fetch(
      'https://countriesnow.space/api/v0.1/countries/state/cities',
      requestOptions
    );
  });

  async function fetchCities() {
    mutate();

    if (dataMut) {
      const citiesJson = await dataMut?.json();

      setCities(citiesJson.data);
    }
  }

  useEffect(() => {
    fetchCities();
  }, [stepTwo.state]);

  useEffect(() => {
    const countrySelected = countriesAndStates?.find((country) => {
      return country.name === stepTwo.country;
    });

    countrySelected?.states.length > 0
      ? setStates(countrySelected.states)
      : setStates([]);

    setCities([]); //clear cities
  }, [stepTwo.country]);

  function handleInputChange(e) {
    if (stepTwo[e.target.name] !== e.target.value) {
      dispatch(ChangeStepTwo({ ...stepTwo, [e.target.name]: e.target.value }));
    }
  }

  function handleSelectCountry(e) {
    if (stepTwo.country !== e.label) {
      dispatch(ChangeStepTwo({ ...stepTwo, ['country']: e.label }));
    }
  }

  function getCountryValueSelected() {
    const countrySelected = countriesAndStates.find(
      (option) => option.label === stepTwo.country
    );

    return countrySelected;
  }

  return (
    <S.Form>
      <BackButton href='http://localhost:3000/StepOne' />

      <TitleForm>Address</TitleForm>

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

        {/* <InputSelect
          name='country'
          label='Country'
          placeholder='select a country'
          optionsList={countriesAndStates}
          defaultValue={stepTwo.country}
          onBlur={handleInputChange}
        /> */}
      </div>

      <SelectInput
        placeholder={'select a country'}
        options={countriesAndStates}
        onChange={handleSelectCountry}
        value={getCountryValueSelected()}
      />

      <InputText
        className='oneField'
        name='address'
        placeholder='av...'
        maxLength='80'
        defaultValue={stepTwo.address}
        onChange={handleInputChange}
      >
        Address
      </InputText>

      <div className='doubleFields'>
        {/* <InputSelect
          name='state'
          label='State'
          placeholder={
            states?.length <= 0 ? 'states not found' : 'select a state'
          }
          optionsList={states}
          disabled={states?.length <= 0 || !stepTwo.country}
          defaultValue={stepTwo.state}
          onChange={handleInputChange}
        /> */}

        {/* <InputSelect
          name='city'
          label='City'
          placeholder={
            cities?.length === 0 ? 'cities not found' : 'select a city'
          }
          optionsList={cities}
          disabled={states?.length <= 0 || !stepTwo.country}
          defaultValue={stepTwo.city}
          onChange={handleInputChange}
        /> */}
      </div>

      <Button href='http://localhost:3000/StepThree'>Next</Button>
    </S.Form>
  );
}
