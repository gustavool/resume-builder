import { actionTypes } from '../actions/StepOne.action';

const initialState = {
  firstName: '',
  lastName: '',
  age: '',
  email: '',
};

export default function StepOneReducer(
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
