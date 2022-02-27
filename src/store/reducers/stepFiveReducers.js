import { actionTypes } from '../actions/stepFiveActions';

const initialState = {
  name: '',
  date: '',
  linkUrl: '',
  description: '',
};

export default function stepFiveReducer(
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
