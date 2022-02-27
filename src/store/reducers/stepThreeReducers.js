import { actionTypes } from '../actions/stepThreeActions';

const initialState = {
  occupation: '',
  startDate: '',
  endDate: '',
  employer: '',
  activities: '',
};

export default function stepThreeReducer(
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
