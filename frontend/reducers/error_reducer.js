import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import billErrorReducer from './bill_errors_reducer';
import friendErrorReducer from './friend_errors_reducer';
import splitErrorReducer from './split_errors_reducer';

export default combineReducers({
    session: sessionErrorsReducer,
    bill: billErrorReducer,
    friend: friendErrorReducer,
    split: splitErrorReducer
})