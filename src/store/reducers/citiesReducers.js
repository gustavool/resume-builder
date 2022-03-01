import { actionTypes } from '../actions/citiesActions';

const initialState = {
  data: [],
  error: false,
  msg: '',
  isLoading: false,
};

export default function citiesReducer(state = initialState, { type, payload }) {
  switch (type) {
    case actionTypes.GET_CITIES_START:
      return {
        ...state,
        ...payload,
        isLoading: true,
      };

    case actionTypes.GET_CITIES_SUCCESS:
      return {
        ...state,
        ...payload,
        isLoading: false,
      };

    case actionTypes.GET_CITIES_ERROR:
      return {
        ...state,
        ...payload,
        isLoading: false,
      };

    default:
      return state;
  }
}
