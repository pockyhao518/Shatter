import React from 'react';
import { Link } from 'react-router-dom';
import LoginError from './login_error';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoSubmit = this.handleDemoSubmit.bind(this)
    }
    componentWillUnmount() {
        this.props.clearErrors();
    }
    update(field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state);
    }

    handleDemoSubmit(e) {
        e.preventDefault();
        this.props.login({
            username: 'DemoUser',
            password: 'password',});
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
                <LoginError errors={this.props.errors} />
                <div className='log-form-page'>
                    <img src={window.icon} alt="icon" />
                    
                    <form>
                        <h2>WELCOME TO SHATTER</h2>
                        <label>Username:
                            <br/>
                            <input type="text"
                                value={this.state.username}
                                onChange={this.update('username')} /></label>
                        <br/>
                        <br />
                        <label>Password:
                            <br />
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')} />
                        <br/>
                            <br />
                        </label>
                        <button onClick={this.handleSubmit}>Log In!</button>
                        <button className='demo' onClick={this.handleDemoSubmit}>Demo</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;