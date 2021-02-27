import { combineReducers } from 'redux';
import authReducer from './authReducer';
import notepadReducer from './notepadReducer';
import noteReducer from './noteReducer';
import requestReducer from './requestReducer';

const rootReducer = combineReducers({
  authReducer,
  notepadReducer,
  noteReducer,
  requestReducer,
});

export default rootReducer;
