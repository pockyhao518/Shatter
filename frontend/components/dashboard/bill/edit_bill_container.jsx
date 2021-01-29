import React from 'react';
import { connect } from 'react-redux';
import BillForm from './billForm';
import { fetchSingleBill, updateBill } from '../../../actions/bills_actions';
import { closeModal } from '../../../actions/modal_actions';
import { createSplit,deleteSplit} from '../../../actions/splits_action';

const mSTP = (state, ownProps) => {
    
    const bill = ownProps.bill;
    const friends = ownProps.friends;
    const splits = ownProps.splits;

    let arr = [];
    let spm = 0;
    let remove = [];

    splits.forEach(sp=>{
        if(bill.id === sp.bill_id){
            remove.push(sp.id)
            spm = sp.amount;
            friends.forEach(fr=>{
                if(fr.id === sp.payer_id){
                    arr.push(fr)
                }
            })
        }
        
    })

    return {
        splitId: remove,
        id: bill.id,
        amount: bill.amount,
        equal: bill.equal,
        description: bill.description,
        date: bill.date,
        formType: 'Edit',
        friendsList: arr,
        split: spm,
        currentUser: Object.values(state.entities.users)[0]
    }
}

const mDTP = dispatch => ({
    action: bill => dispatch(updateBill(bill)),
    fetchSingleBill: billId => dispatch(fetchSingleBill(billId)),
    closeModal: () => dispatch(closeModal()),
    openModal: modal => dispatch(openModal(modal)),
    deleteSplit: splitId => dispatch(deleteSplit(splitId)),
    createSplit: split => dispatch(createSplit(split))
})

export default connect(mSTP, mDTP)(BillForm)