/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getCities } from '../../store/actions/citiesActions';
import { getCountriesStates } from '../../store/actions/countriesAndStatesActions';
import { changeStepTwo } from '../../store/actions/stepTwoActions';
import BackButton from '../BackButton';
import Button from '../Button';
import CountrySelect from '../CountrySelect';
import InputNumber from '../InputNumber';
import InputText from '../InputText';
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
  });

  useEffect(() => {
    if (countriesAndStates) {
      const countriesValueLabel = countriesAndStates?.data?.map((country) => {
        return {
          value: country.iso3,
          label: country.name,
        };
      });

      setCountriesOptions(countriesValueLabel);
      setStatesOptions([]); //clear states options
    }
  }, [countriesAndStates]);

  useEffect(() => {
    // dispatch(changeStepTwo({ ...stepTwo, ['state']: '' })); //clear state global state
    // dispatch(changeStepTwo({ ...stepTwo, ['city']: '' })); //clear city global state

    if (Array.isArray(countriesAndStates.data)) {
      const countrySelected = countriesAndStates.data.find((country) => {
        return country.name === stepTwo?.country;
      });

      if (countrySelected?.states?.length > 0) {
        const statesValueLabel = countrySelected.states.map((state) => {
          return {
            value: state.state_code,
            label: state.name,
          };
        });

        setStatesOptions(statesValueLabel);
      } else {
        dispatch(changeStepTwo({ ...stepTwo, ['state']: '' })); //clear state global state
        // dispatch(changeStepTwo({ ...stepTwo, ['city']: '' })); //clear city global state

        setStatesOptions([]);
      }
    }
  }, [stepTwo.country]);

  // useEffect(() => {
  //   if (!cities || cities.data.length === 0) {
  //     dispatch(getCities(stepTwo.country, stepTwo.state));
  //   }
  // });

  // useEffect(() => {
  //   dispatch(getCities(stepTwo.country, stepTwo.state));
  // }, [stepTwo.state]);

  // useEffect(() => {

  //   dispatch(changeStepTwo({ ...stepTwo, ['city']: '' })); //clear city global state

  //   if (Array.isArray(cities.data) && cities.data.length > 0) {
  //     const citiesValueLabel = cities.data.map((city, index) => {
  //       return {
  //         value: index.toString(),
  //         label: city,
  //       };
  //     });

  //     setCitiesOptions(citiesValueLabel);
  //   } else {
  //     setCitiesOptions([]); //clear cities options
  //   }
  // }, [cities]);

  function handleInputChange(e) {
    if (stepTwo[e.target.name] !== e.target.value) {
      dispatch(changeStepTwo({ ...stepTwo, [e.target.name]: e.target.value }));
    }
  }

  function handleSelectCountry(e) {
    if (stepTwo.country !== e.label) {
      dispatch(changeStepTwo({ ...stepTwo, ['state']: '' }));
      setStatesOptions([]); //clear states options

      dispatch(changeStepTwo({ ...stepTwo, ['country']: e.label }));
    }
  }

  function handleSelectState(e) {
    if (stepTwo.state !== e.label) {
      dispatch(changeStepTwo({ ...stepTwo, ['state']: e.label }));
    }
  }

  function handleSelectState2(e) {
    console.log('e.target.value', e.target.value);

    dispatch(changeStepTwo({ ...stepTwo, ['state']: e.target.value }));
  }

  function handleSelectCity(e) {
    if (stepTwo.city !== e.label) {
      dispatch(changeStepTwo({ ...stepTwo, ['city']: e.label }));
    }
  }

  return (
    <S.Form>
      <BackButton href='http://localhost:3000/StepOne' />

      <TitleForm>Address</TitleForm>

      <CountrySelect options={countriesOptions} />

      {/* <StateSelect options={statesOptions} /> */}

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

      {console.log('statesOptions', statesOptions.length)}

      <div className='doubleFields'></div>

      <Button href='http://localhost:3000/StepThree'>Next</Button>
    </S.Form>
  );
}
