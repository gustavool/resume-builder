import { actionTypes } from '../actions/stepTwo.action';

const initialState = {
  number: '',
  country: '',
  address: '',
  state: '',
  city: '',
};

export default function StepTwoReducer(
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
