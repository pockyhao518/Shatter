import { combineReducers } from 'redux';
import bills from './bills_reducer'
import users from './users_reducer';
import friends from './friends_reducer';
import splits from './splits_reducer';

export default combineReducers({
    users,
    bills,
    friends,
    splits,
});
