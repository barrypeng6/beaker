import { combineReducers } from 'redux';
import loginStatus from './loginStatus';

const rootReducer = combineReducers({
  loginStatus,
});

export default rootReducer;