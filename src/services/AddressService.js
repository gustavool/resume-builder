/* eslint-disable no-unused-vars */
import { useState } from 'react';

export function GetCountriesAndStates() {
  const [countriesAndStates, setCountriesAndStates] = useState(null);
  const [errorCountriesAndStates, setErrorCountriesAndStates] = useState(null);
  const [isLoadingCountriesAndStates, setIsLoadingCountriesAndStates] =
    useState(true);

  fetch('https://countriesnow.space/api/v0.1/countries/states')
    .then(async (response) => {
      const json = await response.json();
      setCountriesAndStates(json);
    })
    .catch((error) => {
      setErrorCountriesAndStates(error);
    })
    .finally(() => {
      setIsLoadingCountriesAndStates(false);
    });

  return {
    isLoadingCountriesAndStates,
    countriesAndStates,
    errorCountriesAndStates,
  };
}

export function GetCities(country, state) {
  const [cities, setCities] = useState(null);
  const [errorCities, setErrorCities] = useState(null);
  const [isLoadingCities, setIsLoadingCities] = useState(true);

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      country: country,
      state: state,
    }),
  };

  fetch('https://countriesnow.space/api/v0.1/countries/states', requestOptions)
    .then(async (response) => {
      const json = await response.json();
      setCities(json);
    })
    .catch((error) => {
      setErrorCities(error);
    })
    .finally(() => {
      setIsLoadingCities(false);
    });

  return {
    isLoadingCities,
    cities,
    errorCities,
  };
}
