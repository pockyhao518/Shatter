import { connect } from 'react-redux';
import BillFrom from './billForm';
import { withRouter } from 'react-router-dom';
import {createBill} from '../../../actions/bills_actions';
import { closeModal } from '../../../actions/modal_actions';
import { createSplit} from '../../../actions/splits_action';

const mSTP = (state, ownProps) => {
    let today = new Date();
    let dd = today.getDate();

    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }

    if (mm < 10) {
        mm = '0' + mm;
    }
    today = yyyy+ '-'+mm + '-' + dd   ;

    return {
        amount: 0,
        equal: true,
        description: '',
        date: today,
        formType: 'Create',
        friendsList: [],
        split: 0
}}

const mDTP = dispatch => ({
    action: bill => dispatch(createBill(bill)),
    closeModal: () => dispatch(closeModal()),
    createSplit: split => dispatch(createSplit(split)),
    
});

export default withRouter(connect(mSTP, mDTP)(BillFrom));