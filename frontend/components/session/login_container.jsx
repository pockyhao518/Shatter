import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import Login from './login';

const mDTP = (dispatch) => ({
    login: user => dispatch(login(user)),
});

export default connect(undefined, mDTP)(Login);