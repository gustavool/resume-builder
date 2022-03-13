import { combineReducers } from 'redux';

import citiesReducer from './citiesReducers';
import countriesAndStatesReducer from './countriesAndStatesReducers';
import stepFiveReducer from './stepFiveReducers';
import stepFourReducer from './stepFourReducers';
import stepOneReducer from './stepOneReducers';
import stepThreeReducer from './stepThreeReducers';
import stepTwoReducer from './stepTwoReducers';
import themeReducer from './themeReducers';

const rootReducer = combineReducers({
  stepOneReducer,
  stepTwoReducer,
  stepThreeReducer,
  stepFourReducer,
  stepFiveReducer,
  countriesAndStatesReducer,
  citiesReducer,
  themeReducer,
});

export default rootReducer;
