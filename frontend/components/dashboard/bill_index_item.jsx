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
            this.props.openModal({ modal: modal, bill: bill })
        }
    }
    
    render(){
        return (
        <li>
                <div><button onClick={this.handleClick('edit-bill')}>{this.props.bill.description}</button></div>
            <div>${this.props.bill.amount}</div>
            
            <button onClick={() => this.props.deleteBill(this.props.bill.id)}>X</button>
        </li>
    )
    }
    
}

