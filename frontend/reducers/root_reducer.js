import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import entities from './entities_reducer';

export default combineReducers({
  session: sessionReducer,
  entities
});