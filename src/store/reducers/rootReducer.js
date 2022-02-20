import { combineReducers } from 'redux';

import StepFiveReducer from './StepFive.reducer';
import StepFourReducer from './StepFour.reducer';
import StepOneReducer from './StepOne.reducer';
import StepThreeReducer from './StepThree.reducer';
import StepTwoReducer from './StepTwo.reducer';

const rootReducers = combineReducers({
  StepOneReducer,
  StepTwoReducer,
  StepThreeReducer,
  StepFourReducer,
  StepFiveReducer,
});

export default rootReducers;
