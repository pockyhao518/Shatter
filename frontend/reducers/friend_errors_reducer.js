import { RECEIVE_FRIEND_ERROR } from '../actions/friends_action';

export default (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_FRIEND_ERROR:
            return action.errors;

        default:
            return state;
    }
}