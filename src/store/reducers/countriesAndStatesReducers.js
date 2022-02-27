import { actionTypes } from '../actions/countriesAndStatesActions';

const initialState = {
  data: [],
  error: false,
  msg: '',
};

export default function getCountriesAndStatesReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case actionTypes.GET_COUNTRIES_STATES:
      return {
        ...state,
        ...payload,
      };

    default:
      return state;
  }
}
