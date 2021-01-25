import {
    RECEIVE_ALL_BILLS,
    RECEIVE_BILL,
    REMOVE_BILL
} from '../actions/bills_actions';

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_BILLS:
            return action.bills;

        case RECEIVE_BILL:
            return Object.assign({}, state, { [action.bill.id]: action.bill })

        case REMOVE_BILL:
            let newState = Object.assign({}, state);
            delete newState[action.billId];
            return newState;

        default:
            return state;
    }
}