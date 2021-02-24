import { combineReducers } from 'redux';
import authReducer from './authReducer';
import notepadReducer from './notepadReducer';
import requestReducer from './requestReducer';

const rootReducer = combineReducers({
  authReducer,
  notepadReducer,
  requestReducer,
});

export default rootReducer;
