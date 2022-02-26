import { combineReducers } from 'redux';

import CitiesReducer from './Cities.reducer';
import CountriesAndStatesReducer from './CountriesAndStates.reducer';
import StepFiveReducer from './StepFive.reducer';
import StepFourReducer from './StepFour.reducer';
import StepOneReducer from './StepOne.reducer';
import StepThreeReducer from './StepThree.reducer';
import StepTwoReducer from './StepTwo.reducer';

const rootReducer = combineReducers({
  StepOneReducer,
  StepTwoReducer,
  StepThreeReducer,
  StepFourReducer,
  StepFiveReducer,
  CountriesAndStatesReducer,
  CitiesReducer,
});

export default rootReducer;
