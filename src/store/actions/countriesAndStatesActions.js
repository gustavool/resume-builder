export const actionTypes = {
  GET_COUNTRIES_STATES_START: 'GET_COUNTRIES_STATES_START',
  GET_COUNTRIES_STATES_SUCCESS: 'GET_COUNTRIES_STATES_SUCCESS',
  GET_COUNTRIES_STATES_ERROR: 'GET_COUNTRIES_STATES_ERROR',
};

export const getCountriesStates = () => (dispatch) => {
  dispatch({
    type: actionTypes.GET_COUNTRIES_STATES_START,
  });

  fetch('https://countriesnow.space/api/v0.1/countries/states')
    .then((response) => response.json())
    .then((data) => {
      if (data.error === false) {
        dispatch({
          type: actionTypes.GET_COUNTRIES_STATES_SUCCESS,
          payload: { ...data },
        });
      } else {
        dispatch({
          type: actionTypes.GET_COUNTRIES_STATES_ERROR,
          payload: { ...data },
        });
      }
    })
    .catch((error) =>
      dispatch({
        type: actionTypes.GET_COUNTRIES_STATES_ERROR,
        payload: {
          data: [],
          error: true,
          msg: error.message,
        },
      })
    );
};
