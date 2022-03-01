import { actionTypes } from '../actions/countriesAndStatesActions';

const initialState = {
  data: [],
  error: false,
  msg: '',
  isLoading: false,
};

export default function getCountriesAndStatesReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case actionTypes.GET_COUNTRIES_STATES_START:
      return {
        ...state,
        ...payload,
        isLoading: true,
      };

    case actionTypes.GET_COUNTRIES_STATES_SUCCESS:
      return {
        ...state,
        ...payload,
        isLoading: false,
      };

    case actionTypes.GET_COUNTRIES_STATES_ERROR:
      return {
        ...state,
        ...payload,
        isLoading: false,
      };

    default:
      return state;
  }
}
