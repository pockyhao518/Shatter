import {
    RECEIVE_ALL_BILLS,
    RECEIVE_BILL,
    REMOVE_BILL
} from '../actions/bills_actions';

export default (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_ALL_BILLS:
            return action.bills;

        case RECEIVE_BILL:
            newState[action.bill.id] = action.bill;
            return newState;
        case REMOVE_BILL:
            delete newState[action.billId];
            return newState;

        default:
            return state;
    }
}