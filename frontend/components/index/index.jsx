import React from 'react';
import Main from './main';
import Footer from './foot';
import { Link } from 'react-router-dom';

class Index extends React.Component {
    constructor(props){
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
    
    render(){
        const logStatus = this.props.currentUser ? (
        <div>
            <div className="dropdown">
                    <button onFocus={this.whenFocusOrBlur} onBlur={this.whenFocusOrBlur}>{this.props.currentUser.username}▼ {this.state.show ? <a className="header-button" onClick={this.props.logout}>Log Out</a>: null} </button>
            </div>    
        </div>): 
        (<div>
            <Link className="login" to="/login">Log in</Link>
            <Link className="signup" to="/signup">Sign up</Link>
        </div>
        );
            const path = this.props.currentUser ? (
                <Link to='/dashboard'>
                    <h1>Dashboard</h1>
                </Link>
            ) : (<Link to = '/'>
                        <h1>Shatter</h1>
                        </Link >);
        return(
            <div className="index">
                <div className="login-signup">
                    <div id = 'first-icon'>
                        <img src={window.icon} alt="icon" />
                        {path}
                    </div>
                    <div>
                        {logStatus}
                    </div>
                </div>
            <Main/>
            <Footer/>
        </div>
        )
    }
    
}

export default Index;