import React from 'react';

export default class SplitIndexItem extends React.Component {
    constructor(props) {
        super(props)
        // debugger
    }


    render() {
        
   
        return (
            <li>
                <article>You split with {this.props.id}:</article>
                <div>${this.props.amount}</div>
               
            </li>
        )
    }

}
