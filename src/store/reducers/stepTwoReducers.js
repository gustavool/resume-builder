import { actionTypes } from '../actions/stepTwoActions';

const initialState = {
  number: '',
  country: '',
  address: '',
  state: '',
  city: '',
};

export default function stepTwoReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case actionTypes.CHANGE:
      return {
        ...state,
        ...payload,
      };

    default:
      return state;
  }
}
