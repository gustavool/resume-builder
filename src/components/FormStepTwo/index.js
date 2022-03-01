import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getCities } from '../../store/actions/citiesActions';
import { getCountriesStates } from '../../store/actions/countriesAndStatesActions';
import { changeStepTwo } from '../../store/actions/stepTwoActions';
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

  const dispatch = useDispatch();
  const stepTwo = useSelector((state) => state.stepTwoReducer);
  const countriesAndStates = useSelector(
    (state) => state.countriesAndStatesReducer
  );
  const cities = useSelector((state) => state.citiesReducer);

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
      const countrySelected = countriesAndStates.data.find((country) => {
        return country.name === stepTwo?.country;
      });

      console.log('stateOptions', statesOptions);

      setStatesOptions([]); //clear states options
      setCitiesOptions([]); //clear cities options

      if (countrySelected?.states?.length > 0) {
        setStatesOptions(countrySelected?.states);
        if (stepTwo.state !== '' && stepTwo.city !== '') {
          dispatch(changeStepTwo({ ...stepTwo, ['city']: '', ['state']: '' })); //clear city global state
        }
      } else if (countrySelected?.states?.length === 0) {
        if (stepTwo.city !== '' && stepTwo.state !== '') {
          dispatch(changeStepTwo({ ...stepTwo, ['city']: '', ['state']: '' })); //clear city global state
        } else if (stepTwo.state !== '') {
          dispatch(changeStepTwo({ ...stepTwo, ['state']: '' })); //clear state global state
        }
      }
    }
  }, [stepTwo.country]);

  useEffect(() => {
    const isStateChanged = cities.msg.includes(stepTwo.state);
    if (stepTwo.state !== '' && !isStateChanged) {
      dispatch(getCities(stepTwo.country, stepTwo.state));
    }
  }, [stepTwo.state]);

  useEffect(() => {
    if (Array.isArray(cities.data) && cities.data.length > 0) {
      setCitiesOptions(cities.data);
    } else {
      setCitiesOptions([]);
    }
  }, [cities]);

  function handleInputChange(e) {
    if (stepTwo[e.target.name] !== e.target.value) {
      dispatch(changeStepTwo({ ...stepTwo, [e.target.name]: e.target.value }));
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
          defaultValue={stepTwo?.number || ''}
          onBlur={handleInputChange}
        >
          Number
        </InputNumber>

        <CountrySelect options={countriesOptions} />
      </div>

      <InputText
        className='oneField'
        name='address'
        placeholder='av...'
        maxLength='80'
        defaultValue={stepTwo?.address || ''}
        onChange={handleInputChange}
      >
        Address
      </InputText>

      <div className='doubleFields'>
        <StateSelect options={statesOptions} />

        <CitySelect options={citiesOptions} />
      </div>

      <Button href='http://localhost:3000/StepThree'>Next</Button>
    </S.Form>
  );
}
