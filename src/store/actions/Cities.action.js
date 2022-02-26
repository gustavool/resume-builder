export const actionTypes = {
  GET_CITIES_SUCCESS: 'GET_CITIES_SUCCESS',
  GET_CITIES_LOADING: 'GET_CITIES_LOADING',
  GET_CITIES_ERROR: 'GET_CITIES_ERROR',
};

export const GetCities = (country, state) => (dispatch) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      country: country,
      state: state,
    }),
  };

  fetch(
    'https://countriesnow.space/api/v0.1/countries/state/cities',
    requestOptions
  )
    .then((response) => response.json())
    .then((data) => {
      if (data.error === false) {
        dispatch({ type: actionTypes.GET_CITIES_SUCCESS, payload: data });
      } else {
        dispatch({
          type: actionTypes.GET_CITIES_ERROR,
          data,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: actionTypes.GET_CITIES_ERROR,
        data: { data: [], error: true, msg: error.message },
      });
    });
};
