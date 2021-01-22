import React from 'react';
import { Link } from 'react-router-dom';
import LoginError from './login_error';

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
                
                <LoginError errors={this.props.errors} />
                <div className='log-form-page'>
                    <Link to='/'>
                        <img src={window.icon} alt="icon" />
                    </Link>
                
                <form>
                    <label>Username:
                        <br />
                        <input
                            type="text"
                            value={this.state.username}
                            onChange={this.update('username')} /></label>
                    <br />
                        <br />
                <div className={this.state.username ? "appear" : "hidden"}>
                    <label>Email:
                        <br />
                        <input
                            type="text"
                            value={this.state.email}
                            onChange={this.update('email')} /></label>
                    <br />
                        <br />
                    <label>Password:
                        <br />
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.update('password')} />
                    </label>
                    <br />
                        <br />
                    </div>
                    <button onClick={this.handleSubmit}>Sign Up!</button>
                </form>
                </div>
            </div>
        )
    }
}

export default Signup;