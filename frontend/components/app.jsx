import React from 'react';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import Home from './index/index';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

export default () => (
    <div>
        <Route exact path="/" component={Home} />
        <AuthRoute path="/signup" component={SignupContainer} />
        <AuthRoute path="/login" component={LoginContainer} />
    </div>
);