import { RECEIVE_FRIENDS } from '../actions/friends_action';

export default (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_FRIENDS:
            return action.friends

        default:
            return state;
    }
}