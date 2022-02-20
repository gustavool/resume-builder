import { actionTypes } from '../actions/stepFive.action';

const initialState = {
  name: '',
  date: '',
  linkUrl: '',
  description: '',
};

export default function StepFiveReducer(
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
