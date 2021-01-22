import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import Signup from './signup';

const mSTP = (state, ownProps) => {
    const userId = ownProps.match.params.id;
    return {
        currentUser: state.entities.users[userId],
        errors: state.errors
    }
}

const mDTP = (dispatch) => ({
    signup: user => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(mSTP, mDTP)(Signup);