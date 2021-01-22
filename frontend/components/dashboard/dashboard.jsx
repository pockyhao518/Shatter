import React from 'react';

export default class Dashboard extends React.Component {

    render() {
        return (
            <div>
                <div className="login-signup">
                    <div>
                        <h1>Shatter!</h1>
                    </div>
                    <div>
                        <div className="dropdown">
                            <p>{this.props.currentUser.username}</p>

                            <div className="account-drop-down">
                                <button className="header-button" onClick={this.props.logout}>Log Out</button>
                            </div>
                        </div> 
                    </div>
                </div>
                <div className="dashboard">
                    <p>This is dashboard</p>
                </div>
            </div>
        )
    }
}