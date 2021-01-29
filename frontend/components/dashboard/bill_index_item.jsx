import React from 'react';

export default class BillIndexItem extends React.Component{
    constructor(props) {
    // debugger
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(modal) {
        let that = this;
        return e => {
            e.preventDefault();
            const bill = that.props.bill? that.props.bill : null
            const splits = that.props.splits
            const friends = that.props.friends
            this.props.openModal({ modal: modal, bill: bill, splits:splits, friends:friends })
        }
    }
    
    render(){
        let splitA = this.props.bill.amount;
        this.props.splits.forEach(e => {
            if (e.bill_id === this.props.bill.id){
                splitA = e.amount;
            }
        })
        return (
        <li>
                <div><button onClick={this.handleClick('edit-bill')}>{this.props.bill.description}</button></div>
            <div>${splitA}</div>
            
            <button onClick={() => this.props.deleteBill(this.props.bill.id)}>X</button>
        </li>
    )
    }
    
}

