import * as BillApiUtil from '../util/bills_api_util';

export const RECEIVE_ALL_BILLS = 'RECEIVE_ALL_BILLS';
export const RECEIVE_BILL = 'RECEIVE_BILL';
export const REMOVE_BILL = 'REMOVE_BILL';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

const receiveAllBills = bills => {
    return {
        type: RECEIVE_ALL_BILLS,
        bills
    }
}

const receiveBill = bill => {
    return {
        type: RECEIVE_BILL,
        bill
    }
}

const removeBill = billId => {
    return {
        type: REMOVE_BILL,
        billId
    }
}

const receiveErrors = errors => {
    return {
        type: RECEIVE_ERRORS,
        errors
    }
}

export const fetchAllBills = (author_id) => dispatch => (
    BillApiUtil.fetchAllBills(author_id)
    .then(bills => (dispatch(receiveAllBills(bills))
    ), err => {
        return dispatch(receiveErrors(err.responseJSON))
    })
)

export const fetchSingleBill = billId => dispatch => (
    BillApiUtil.fetchSingleBill(billId)
    .then(bill => (dispatch(receiveBill(bill))
    ), err => {
        return dispatch(receiveErrors(err.responseJSON))
    })
)

export const createBill = bill => dispatch => (
    BillApiUtil.createBill(bill)
        .then(bill => (dispatch(receiveBill(bill))
    ), err => {
        return dispatch(receiveErrors(err.responseText))
    })
)

export const updateBill = bill => dispatch => (
    BillApiUtil.updateBill(bill)
        .then(bill => (dispatch(receiveBill(bill))
    ), err => {
        return dispatch(receiveErrors(err.responseJSON))
    })
)

export const deleteBill = (billId) => dispatch => (
    BillApiUtil.deleteBill(billId)
        .then((bill) => (dispatch(removeBill(bill.id))
    ), err => {
        return dispatch(receiveErrors(err.responseJSON))
    })
)
