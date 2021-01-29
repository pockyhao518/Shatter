import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { logout } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { fetchAllBills, deleteBill, updateBill } from '../../actions/bills_actions';
import { fetchAllFriends, deleteFriend } from '../../actions/friends_action';
import { fetchAllSplits } from '../../actions/splits_action';

const mSTP = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id],
        bills: Object.values(state.entities.bills),
        friends: Object.values(state.entities.friends),
        splits: Object.values(state.entities.splits)
    }
}

const mDTP = (dispatch, ownProps) => {
    
    return {
        openModal: (modal) => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal()),
        logout: () => dispatch(logout()),
        fetchAllBills: (currentUserId) => dispatch(fetchAllBills(currentUserId)),
        deleteBill: (id) => dispatch(deleteBill(id)),
        updateBill: (bill) => dispatch(updateBill(bill)),
        fetchAllFriends: () => dispatch(fetchAllFriends()),
        deleteFriend: (friendId) => dispatch(deleteFriend(friendId)),
        addFriend: (friend) => dispatch(addFriend(friend)),
        fetchAllSplits: () => dispatch(fetchAllSplits())
    }
}

export default connect(mSTP, mDTP)(Dashboard);