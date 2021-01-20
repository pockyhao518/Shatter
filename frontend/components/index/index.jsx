import React from 'react';
import Main from './main';
import Footer from './foot';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    render(){
        return(
            <div className="index">
                <div className="login-signup">
                    <div>
                        <h1>Shatter!</h1>
                    </div>
                    <div>
                        <Link className="login" to="/login">Log in</Link>
                        <Link className="signup" to="/signup">Sign up</Link>
                    </div>
                </div>
            <Main/>
            <Footer/>
        </div>
        )
    }
    
}

export default Home;