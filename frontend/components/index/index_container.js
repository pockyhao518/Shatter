import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Index from './index';

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id]
});

const mDTP = dispatch => ({
    logout: () => dispatch(logout()).then(this.setState({}))
});

export default connect(mSTP,mDTP)(Index);