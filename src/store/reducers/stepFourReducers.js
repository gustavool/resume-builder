import { actionTypes } from '../actions/stepFourActions';

const initialState = {
  name: '',
  startDate: '',
  endDate: '',
  collegeSchool: '',
  activities: '',
};

export default function stepFourReducer(
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
