import { combineReducers } from 'redux';
import authReducer from './authReducer';
import requestReducer from './requestReducer';

const rootReducer = combineReducers({
  authReducer,
  requestReducer,
});

export default rootReducer;
