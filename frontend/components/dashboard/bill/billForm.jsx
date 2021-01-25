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

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state)
        this.props.closeModal();
    }

    render() {
        return (
            <div>
            <h1>NEW BILL</h1>
            <form onSubmit={this.handleSubmit}>
                    <label>Description
                    <textarea value={this.state.description}
                            onChange={this.update('description')}
                        />
                    </label>
                <br/>
                <br/>
                    <label>Amount
                    <input type='number' step="0.01"
                            value={this.state.amount}
                            onChange={this.update('amount')}
                        />
                    </label>
                <br/>
                <br/>

                <label>date
                    <br/>
                    <input type="date"
                            onChange={this.update('date')}
                        />
                </label>
                <br/>
                <br/>
                <div className='bill-form-sub'>
                <button >Create</button>
                </div>
            </form>
            </div>
        )
    }
}

export default BillFrom;