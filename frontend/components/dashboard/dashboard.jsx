import React from 'react';

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false
        }
        this.whenFocusOrBlur = this.whenFocusOrBlur.bind(this);
    }
    whenFocusOrBlur(e) {
        const newState = !this.state.show
        this.setState({ show: newState })
    }
    render() {
        return (
            <div>
                <div className="login-signup">
                    <div>
                        <h1>Shatter!</h1>
                    </div>
                    <div>
                        <div className="dropdown">
                            <button onFocus={this.whenFocusOrBlur} onBlur={this.whenFocusOrBlur}>{this.props.currentUser.username}▼ {this.state.show ? <a className="header-button" onClick={this.props.logout}>Log Out</a> : null}</button>
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