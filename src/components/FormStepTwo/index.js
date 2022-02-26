/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { useQuery, useMutation } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';

import { GetCities } from '../../store/actions/Cities.action';
import { GetCountriesStates } from '../../store/actions/CountriesAndStates.action';
import { ChangeStepTwo } from '../../store/actions/stepTwo.action';
import BackButton from '../BackButton';
import Button from '../Button';
import InputNumber from '../InputNumber';
import InputSelect from '../InputSelect';
import InputText from '../InputText';
import TitleForm from '../TitleForm';
import * as S from './styles';

export default function FormStepTwo() {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [countries, setCountries] = useState([]);
  // const [countriesAndStates, setCountriesAndStates] = useState([]);

  const dispatch = useDispatch();

  const stepTwo = useSelector((state) => state.StepTwoReducer);

  useEffect(() => {
    dispatch(GetCountriesStates());
  }, []);

  const state = useSelector((state) => state);
  useEffect(() => {
    // if(Array.isArray(CitiesReducer.payload) && CitiesReducer.payload.length > 0) {}
    dispatch(GetCities('Brazil', 'Acre'));
  }, []);

  console.log('state', state);

  const { data: countriesWithStates } = useQuery(
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
    if (countriesWithStates) {
      const countriesLabelValue = countriesWithStates?.data?.map((country) => {
        return {
          value: country.iso3,
          label: country.name,
        };
      });

      setCountries(countriesLabelValue);
    }
  }, [countriesWithStates]);

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

  useEffect(() => {
    if (Array.isArray(countriesWithStates?.data)) {
      const countrySelected = countriesWithStates?.data?.find((country) => {
        return country.name === stepTwo.country;
      });

      if (countrySelected?.states?.length > 0) {
        const statesLabelValue = countrySelected.states.map((state) => {
          return {
            value: state.state_code,
            label: state.name,
          };
        });

        setStates(statesLabelValue);
      }
    }
  }, [stepTwo.country]);

  async function fetchCities() {
    mutate();

    // vindo datMut antigo
    const citiesJson = await dataMut?.json();

    if (dataMut) {
      const citiesLabelValue = await citiesJson?.data?.map((city, index) => {
        return {
          value: index.toString(),
          label: city,
        };
      });

      await setCities(citiesLabelValue);
    }
  }

  useEffect(() => {
    fetchCities();
  }, [stepTwo.state]);

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

  function handleSelectState(e) {
    if (stepTwo.state !== e.label) {
      dispatch(ChangeStepTwo({ ...stepTwo, ['state']: e.label }));
    }
  }

  function handleSelectCity(e) {
    if (stepTwo.city !== e.label) {
      dispatch(ChangeStepTwo({ ...stepTwo, ['city']: e.label }));
    }
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

        <InputSelect
          className='select'
          placeholder={'select a country'}
          options={countries}
          onChange={handleSelectCountry}
          value={countries?.find((option) => option.label === stepTwo.country)}
        >
          Country
        </InputSelect>
      </div>

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
        <InputSelect
          // placeholder={'select a state'}
          options={states}
          onChange={handleSelectState}
          // value={states?.find((option) => option.label === stepTwo.state)}
          placeholder={
            states?.length <= 0 ? 'states not found' : 'select a state'
          }
        >
          State
        </InputSelect>

        <InputSelect
          // placeholder={'select a city'}
          options={cities}
          onChange={handleSelectCity}
          value={cities?.find((option) => option.label === stepTwo.city)}
          placeholder={
            cities?.length <= 0 ? 'cities not found' : 'select a state'
          }
        >
          City
        </InputSelect>
      </div>

      <Button href='http://localhost:3000/StepThree'>Next</Button>
    </S.Form>
  );
}
