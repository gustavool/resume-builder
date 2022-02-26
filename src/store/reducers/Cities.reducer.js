import { actionTypes } from '../actions/Cities.action';

const initialState = {
  data: [],
  error: false,
  msg: '',
};

export default function CitiesReducer(state = initialState, { type, payload }) {
  switch (type) {
    case actionTypes.GET_CITIES_SUCCESS:
      return {
        ...state,
        ...payload,
      };

    default:
      return state;
  }
}
