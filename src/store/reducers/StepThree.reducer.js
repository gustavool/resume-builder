import { actionTypes } from '../actions/stepThree.action';

const initialState = {
  occupation: '',
  startDate: '',
  endDate: '',
  employer: '',
  activities: '',
};

export default function StepThreeReducer(
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
