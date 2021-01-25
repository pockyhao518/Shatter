import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { logout } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { fetchAllBills } from '../../actions/bills_actions';

const mSTP = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id],
        bills: Object.values(state.entities.bills)
    }
}

const mDTP = (dispatch, ownProps) => {
    
    return {
        openModal: (modal) => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal()),
        logout: () => dispatch(logout()),
        fetchAllBills: (currentUserId) => dispatch(fetchAllBills(currentUserId))
    }
}

export default connect(mSTP, mDTP)(Dashboard);