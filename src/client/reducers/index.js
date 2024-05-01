import STATE from './stateReducer';
import CASES from './casesReducer';
import ACCOUNTS from './accountsReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  STATE,
  CASES,
  ACCOUNTS,
});

export default rootReducer;