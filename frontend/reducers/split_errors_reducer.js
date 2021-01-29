import { RECEIVE_SPLIT_ERROR } from '../actions/splits_action';

export default (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SPLIT_ERROR:
            return action.errors;

        default:
            return state;
    }
}