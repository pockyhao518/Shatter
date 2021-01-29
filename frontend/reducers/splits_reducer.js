import { RECEIVE_SPLITS } from '../actions/splits_action';

export default (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_SPLITS:
            return action.splits

        default:
            return state;
    }
}