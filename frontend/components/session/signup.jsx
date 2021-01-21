import React from 'react';
import { Link } from 'react-router-dom';

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: "",
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.signup(this.state);
    }

    render() {
        const logStatus = this.props.currentUser ? (
            <div>
                <button className="header-button" onClick={this.props.logout}>Log Out</button>        </div>) :
            (<div>
                <Link className="login" to="/login">Log in</Link>
                <Link className="signup" to="/signup">Sign up</Link>
            </div>
            );
        return (
            <div className="session-form">
                <div className="login-signup">
                    <div>
                        <img src={window.icon} alt="icon" />
                        <Link to='/'>
                        <h1>Shatter</h1>
                        </Link>
                    </div>
                    <div>
                        {logStatus}
                    </div>
                </div>
                <div className='log-form-page'>
                <img src={window.icon} alt="icon" />
                <form>
                    <label>Username:
                        <br />
                        <input
                            type="text"
                            value={this.state.username}
                            onChange={this.update('username')} /></label>
                    <br />
                    <label>Email:
                        <br />
                        <input
                            type="text"
                            value={this.state.email}
                            onChange={this.update('email')} /></label>
                    <br />
                    <label>Password:
                        <br />
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.update('password')} />
                    </label>
                    <br />
                    <button onClick={this.handleSubmit}>Sign Up!</button>
                </form>
                </div>
            </div>
        )
    }
}

export default Signup;