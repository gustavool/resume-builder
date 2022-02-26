export const actionTypes = {
  GET_COUNTRIES_STATES: 'GET_COUNTRIES_STATES',
  // GET_COUNTRIES_STATES_LOADING: 'GET_COUNTRIES_STATES_LOADING',
  // GET_COUNTRIES_STATES_ERROR: 'GET_COUNTRIES_STATES_ERROR',
};

export const GetCountriesStates = () => (dispatch) => {
  fetch('https://countriesnow.space/api/v0.1/countries/states')
    .then((response) => response.json())
    .then((data) =>
      dispatch({ type: actionTypes.GET_COUNTRIES_STATES, payload: data })
    );
  // .catch((error) =>
  //   dispatch({
  //     type: actionTypes.GET_COUNTRIES_STATES_ERROR,
  //     error: error.message || 'Unexpected Error!!!',
  //   })
  // );
};
