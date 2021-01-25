import React from 'react';
import { Link } from 'react-router-dom';
import CenterDashboard from './centerDashboard/center_dashboard';
import CreateBillFormContainer from './bill/create_bill_container'

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
    componentDidMount() {
        this.props.fetchAllBills(currentUser.id);
    }
    render() {
        const logStatus = this.props.currentUser ? (
            <div>
                <div className="dropdown">
                    <button onFocus={this.whenFocusOrBlur} onBlur={this.whenFocusOrBlur}>{this.props.currentUser.username}▼ {this.state.show ? <a className="header-button" onClick={this.props.logout}>Log Out</a> : null}</button>
                </div>
            </div>) :
            (<div>
                <Link className="login" to="/login">Log in</Link>
                <Link className="signup" to="/signup">Sign up</Link>
            </div>
            );
        return (
            
            <div className="dashboard">
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
                </div>
                <div className='dash-main'>
                    <div className='left-side-bar'>
                        Dashboard
                    </div>
                    <div className='center-col'>
                        
                        
                        <CenterDashboard openModal={this.props.openModal} currentUser={this.props.currentUser} header={'Dashboard'}/>
                        <ul>
                                {this.props.bills.map(bill =>
                                    <li key={bill.id}>{bill.description} {bill.amount}</li>)}
                            </ul>
                            <CreateBillFormContainer />
                    </div>
                    <div className='right-side-bar'>
                        Setting
                    </div>
                </div>
            </div>
        )
    }
}
