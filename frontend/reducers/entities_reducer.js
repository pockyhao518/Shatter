import { combineReducers } from 'redux';
import bills from './bills_reducer'
import users from './users_reducer';
import friends from './friends_reducer';

export default combineReducers({
    users,
    bills,
    friends,
});
