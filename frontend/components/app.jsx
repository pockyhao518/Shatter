import React from 'react';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import IndexContainer from './index/index_container';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import DashboardContainer from './dashboard/dashboard_container'

export default () => (
    <div>
        <Route exact path="/" component={IndexContainer} />
        <ProtectedRoute path="/dashboard" component={DashboardContainer} />
        <AuthRoute path="/signup" component={SignupContainer} />
        <AuthRoute path="/login" component={LoginContainer} />
    </div>
);