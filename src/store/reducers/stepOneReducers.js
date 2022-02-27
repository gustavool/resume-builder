import { actionTypes } from '../actions/stepOneActions';

const initialState = {
  firstName: '',
  lastName: '',
  age: '',
  gender: '',
  email: '',
};

export default function stepOneReducer(
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
