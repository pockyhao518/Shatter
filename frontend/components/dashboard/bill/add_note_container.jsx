import React from 'react';
import { connect } from 'react-redux';
import AddNote from './AddNote';
import { fetchSingleBill, updateBill } from '../../../actions/bills_actions';
import { closeModal } from '../../../actions/modal_actions';
import { createSplit, deleteSplit } from '../../../actions/splits_action';

const mSTP = (state, ownProps) => {
    const bill = ownProps.bill;

    return {
        id: bill.id,
        amount: bill.amount,
        equal: bill.equal,
        description: bill.description,
        date: bill.date,
        note:bill.note,
        currentUser: Object.values(state.entities.users)[0]
    }
}

const mDTP = dispatch => ({
    action: bill => dispatch(updateBill(bill)),
    fetchSingleBill: billId => dispatch(fetchSingleBill(billId)),
    closeModal: () => dispatch(closeModal()),
    openModal: modal => dispatch(openModal(modal)),
})

export default connect(mSTP, mDTP)(AddNote)