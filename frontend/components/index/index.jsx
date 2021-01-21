import React from 'react';
import Main from './main';
import Footer from './foot';
import { Link } from 'react-router-dom';

class Index extends React.Component {
    constructor(props){
        super(props)
    }
    
    render(){
        const logStatus = this.props.currentUser ? (
        <div>
                <button className="header-button" onClick={this.props.logout}>Log Out</button>        </div>): 
        (<div>
            <Link className="login" to="/login">Log in</Link>
            <Link className="signup" to="/signup">Sign up</Link>
        </div>
        );

        return(
            <div className="index">
                <div className="login-signup">
                    <div>
                        <h1>Shatter</h1>
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