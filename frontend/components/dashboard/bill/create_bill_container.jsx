import { connect } from 'react-redux';
import BillFrom from './billForm';
import { withRouter } from 'react-router-dom';
import {createBill} from '../../../actions/bills_actions'

const mSTP = state => ({
    bill: {
        amount:'',
        equal: true,
        description: '',
        date: '2020-01-01'
    },
})

const mDTP = dispatch => ({
    action: bill => dispatch(createBill(bill))
});

export default withRouter(connect(mSTP, mDTP)(BillFrom));