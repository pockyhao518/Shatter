import React from 'react';

const BillIndexItem = (props) => {
    return (
        <li>
            <div>{props.bill.description}</div>
            <div>{props.bill.amount}</div>
            <button onClick={() => props.deleteBill(props.bill.id)}>X</button>
        </li>
    )
}

export default BillIndexItem;