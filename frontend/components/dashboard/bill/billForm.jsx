import React from 'react';
import Splits from './split/split';


class BillFrom extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props
        this.handleUpdateSplits = this.handleUpdateSplits.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUpdateSplits(list){
        this.setState({ friendsList: list})
        // debugger
        this.updateSplitAmount(this.state.amount, this.state.friendsList);
    }
    
    updateSplitAmount(amount, splits = this.state.friendsList) {
        let numberOfSplits;
        if (splits.length === 0) {
            numberOfSplits = 1;
        } else {
            numberOfSplits = splits.length + 1;
        };

        if (amount > 0) {
            const splitAmount = (amount / numberOfSplits).toFixed(2);
            this.setState({ split: parseFloat(splitAmount) });
        };
        debugger
    };

    update(field) {
        return e => {
            this.updateSplitAmount(this.state.amount, this.state.friendsList)
            this.setState({ [field]: e.currentTarget.value })
            if (field === 'amount')
                this.updateSplitAmount(e.currentTarget.value , this.state.friendsList)

        }
    }

    handleSubmit(e) {
        e.preventDefault();
        let that = {
            id:this.state.id,
            amount: this.state.amount,
            equal: this.state.equal,
            description: this.state.description,
            date: this.state.date,
        }
        debugger
        let list = this.state.friendsList;
        let author = this.state.authorId;
        let splitMoney = this.state.split;
        if(this.state.formType === 'Edit'){
            this.state.splitId.forEach(idx=>{
                this.props.deleteSplit(idx)
            })
        }
        if (list.length !== 0){
            this.props.action(that).then(
                (action) => {
                list.forEach(el=>{
                const split = {
                    bill_id: action.bill.id,
                    payer_id: el.id,
                    amount: splitMoney
                }
                this.props.createSplit(split)
            })
                const owner = {
                bill_id: action.bill.id,
                payer_id: author,
                amount: splitMoney
            }
            this.props.createSplit(owner)
        })
        }else{
            this.props.action(that)
        }
        
        
        this.props.closeModal();
    }

    render() {
        
        return (
            <div>
            <h1>NEW BILL</h1>
            <form onSubmit={this.handleSubmit}>

                    <Splits authorId={this.props.authorId} friends={this.props.friends} friendsList={this.state.friendsList} handleUpdateSplits={this.handleUpdateSplits}/>
                    <br/>
                    <br/>

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
                    <div className="payment-info">
                        <p>Split equally</p>
                        <p>(${this.state.split} / person)</p>
                    </div>
                    <br/>
                    <br/>
                <label>date
                    <br/>
                    <input type="date"
                            value={this.state.date}
                            onChange={this.update('date')}
                        />
                </label>
                <br/>
                <br/>
                <div className='bill-form-sub'>
                        <button >{this.props.formType}</button>
                </div>
            </form>
            </div>
        )
    }
}

export default BillFrom;