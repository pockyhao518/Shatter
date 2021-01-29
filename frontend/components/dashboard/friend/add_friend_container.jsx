import { connect } from 'react-redux';
import FriendForm from './friend_form';
import { withRouter } from 'react-router-dom';
import { closeModal } from '../../../actions/modal_actions';
import { addFriend } from '../../../actions/friends_action';
import { signupFake} from '../../../actions/session_actions';

const mSTP = state => ({
    friend: {
        username: '',
        email: '',
        password: '123456',
        fake: 'true'
    }
})

const mDTP = dispatch => ({
    action: friend => dispatch(addFriend(friend)),
    closeModal: () => dispatch(closeModal()),
    signupFake: (user) => dispatch(signupFake(user))
});

export default withRouter(connect(mSTP, mDTP)(FriendForm));