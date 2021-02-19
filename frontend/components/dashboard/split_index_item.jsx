import React from 'react';

export default class SplitIndexItem extends React.Component {
    constructor(props) {
        super(props)
        debugger
    }


    render() {
        let amount = 0;
        this.props.splits.forEach(el=>{
            if (el.payer_id === this.props.friend.id){
                amount += el.amount
            }
        })
   
        return (
            <li>
                <article>You split with {this.props.friend.username}:</article>
                <article>Total: ${amount}</article>
            </li>
        )
    }

}
