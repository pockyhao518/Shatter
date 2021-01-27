import React from 'react';

export default class FriendIndexItem extends React.Component {
    constructor(props) {
        // debugger
        super(props)
    }


    render() {
        return (
            <li>
                <div>{this.props.friend.username}</div>
                <button onClick={() => this.props.deleteFriend(this.props.friend.id)}>x</button>
            </li>
        )
    }

}
