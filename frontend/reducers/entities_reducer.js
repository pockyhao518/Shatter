import { combineReducers } from 'redux';
import bills from './bills_reducer'
import users from './users_reducer';

export default combineReducers({
    users,
    bills
});
