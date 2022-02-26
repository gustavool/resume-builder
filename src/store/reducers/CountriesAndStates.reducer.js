import { actionTypes } from '../actions/CountriesAndStates.action';

const initialState = {
  data: [],
  error: false,
  msg: '',
};

export default function GetCountriesAndStatesReducer(
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
