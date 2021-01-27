import { connect } from 'react-redux';
import FriendForm from './friend_form';
import { withRouter } from 'react-router-dom';
import { closeModal } from '../../../actions/modal_actions'
import { addFriend } from '../../../actions/friends_action';

const mSTP = state => ({
    friend: {
        username: '',
        email: '',
    }
})

const mDTP = dispatch => ({
    action: friend => dispatch(addFriend(friend)),
    closeModal: () => dispatch(closeModal()),
});

export default withRouter(connect(mSTP, mDTP)(FriendForm));