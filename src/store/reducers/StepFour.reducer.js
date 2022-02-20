import { actionTypes } from '../actions/stepFour.action';

const initialState = {
  name: '',
  startDate: '',
  endDate: '',
  collegeSchool: '',
  activities: '',
};

export default function StepFourReducer(
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
