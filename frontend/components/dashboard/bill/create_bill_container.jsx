import { connect } from 'react-redux';
import BillFrom from './billForm';
import { withRouter } from 'react-router-dom';
import {createBill} from '../../../actions/bills_actions';
import { closeModal } from '../../../actions/modal_actions';
import { createSplit} from '../../../actions/splits_action';

const mSTP = (state, ownProps) => ({
    amount: '',
    equal: true,
    description: '',
    date: '2020-01-01',
    formType: 'Create',
    friendsList: [],
    split: 0
})

const mDTP = dispatch => ({
    action: bill => dispatch(createBill(bill)),
    closeModal: () => dispatch(closeModal()),
    createSplit: split => dispatch(createSplit(split)),
    
});

export default withRouter(connect(mSTP, mDTP)(BillFrom));