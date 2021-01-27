import React from 'react';
import { connect } from 'react-redux';
import BillForm from './billForm';
import { fetchSingleBill, updateBill } from '../../../actions/bills_actions';
import { closeModal } from '../../../actions/modal_actions'

const mSTP = (state, ownProps) => {
    // debugger
    const bill = ownProps.bill
    return {
        bill: {
            id: bill.id,
            amount: bill.amount,
            equal: bill.equal,
            description: bill.description,
            date: bill.date 
        },
        formType: 'Edit',
        currentUser: Object.values(state.entities.users)[0]
    }
}

const mDTP = dispatch => ({
    action: bill => dispatch(updateBill(bill)),
    fetchSingleBill: billId => dispatch(fetchSingleBill(billId)),
    closeModal: () => dispatch(closeModal()),
    openModal: modal => dispatch(openModal(modal)),
})

export default connect(mSTP, mDTP)(BillForm)