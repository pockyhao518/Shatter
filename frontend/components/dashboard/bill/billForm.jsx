import React from 'react';


class BillFrom extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.bill;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    handleSubmit() {
        this.props.action(this.state)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>{this.props.formType}</h1>
                <label>amount
                    <input type='number'
                        value={this.state.amount}
                        onChange={this.update('amount')}
                    />
                </label>
                <br/>
                <br/>
                <label>description
                    <textarea value={this.state.description}
                        onChange={this.update('description')}
                    />
                </label>
                <br/>
                <br/>
                <input type='submit' value='ADD BILL' />

            </form>
        )
    }
}

export default BillFrom;