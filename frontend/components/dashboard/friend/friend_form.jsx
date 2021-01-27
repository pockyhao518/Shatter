import React from 'react';

class FriendForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.friend;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state)
        this.props.closeModal();
    }

    render() {
        return(
            <div>
                <h1>NEW FRIEND</h1>
                <form className='friend-form' onSubmit={this.handleSubmit}>
                    <label>Username
                        <br />
                    <input type='text'
                            value={this.state.username}
                            onChange={this.update('username')}
                        />
                    </label>
                    <br />
                    <br />
                    <label>Email
                        <br />
                    <input type='email'
                            value={this.state.email}
                            onChange={this.update('email')}
                        />
                    </label>
                    <br />
                    <br />
                    <div className='bill-form-sub'>
                        <button >Add</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default FriendForm;