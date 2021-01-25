import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import entities from './entities_reducer';
import errors from './error_reducer';
import uiReducer from './uiReducer';

export default combineReducers({
  session: sessionReducer,
  entities,
  errors,
  ui:uiReducer
});