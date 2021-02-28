import React from 'react';

export default class BillIndexItem extends React.Component{
    constructor(props) {
    // debugger
        super(props)
        this.handleClick = this.handleClick.bind(this);
        this.myfunction = this.myfunction.bind(this);
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

    myfunction(){
        let more = document.getElementById(this.props.bill.id + 'more');
        more.classList.toggle('active-main');
        more.classList.toggle('inactive-main');
    }
    
    render(){
        let splitA = this.props.bill.amount;
        this.props.splits.forEach(e => {
            if (e.bill_id === this.props.bill.id){
                splitA = e.amount;
            }
        })
        let note = 'Nothing to comment';
        if (this.props.bill.note && this.props.bill.note !== ''){
            note = this.props.bill.note
        }
        return (
            
            <div
            onClick={() => this.myfunction()}
            id={this.props.bill.id}>
                <li>
                    <div>{'Description: '+this.props.bill.description}</div>
                    <br />
            <div>Amount: ${splitA}</div>
                <div className='inactive-main' id={this.props.bill.id + 'more'}>
                    <div id='more'>
                        <br />
                            <div>Comment:</div>
                        <p>{note}</p>
                        <br/>
                        <br />
                        <button onClick={this.handleClick('add-note')}>Add Comment</button>
                        <button onClick={this.handleClick('edit-bill')}>Edit</button>
                        <button onClick={() => this.props.deleteBill(this.props.bill.id)}>Delete</button>

                    </div>
                </div>
            </li>
        </div>
        
    )
    }
    
}

