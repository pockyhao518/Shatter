import React from 'react';

export default class Splits extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            finput: ""
        }

        this.show = false;
        this.matcheFriend = this.matcheFriend.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.addSplit = this.addSplit.bind(this);
        this.removeSplit = this.removeSplit.bind(this);
        this.handleUpdateSplits = this.props.handleUpdateSplits.bind(this);
    }

    handleInput(e) {
        if (e.currentTarget.value.length > 0) {
            this.show = true;
        } else {
            this.show = false;
        }
        this.setState({ finput: e.currentTarget.value });
    }

    matcheFriend() {
        const matcheFriend = [];
        let that = this;
        const DisplayName = (friendName, friendId) => {
            let sub = friendName.slice(0, that.state.finput.length);
            const searchString = that.state.finput.toLowerCase();
            // debugger
            const friendsOnList = that.props.friendsList.map(e=>e.id);
            return (
                (friendId != that.props.authorId )&&
                (sub.toLowerCase() === searchString )&&
                (!friendsOnList.includes(parseInt(friendId))
                )
            )
        }

        const userFriends = that.props.friends;

        userFriends.forEach(friend => {
            const friendName = friend.username;
            const friendId = friend.id;
            if (DisplayName(friendName, friendId)) {
                matcheFriend.push(friendName);
            }
        });

        if (matcheFriend.length === 0) {
            matcheFriend.push('No Friends');
        }

        return matcheFriend;
    }

    addSplit(e) {
        const username = e.currentTarget.innerText;

        if (username === "No Friends") return;

        let friendId;
        this.props.friends.forEach(friend => {
            if (friend.username === username) {
                friendId = friend.id;
            }
        })
        const newSplits = this.props.friendsList.concat(
            { id: friendId, username }
        ); 
        this.handleUpdateSplits(newSplits);
    }

    removeSplit(idx) {
        debugger
        let newSplits = [];
        this.props.friendsList.forEach(el => newSplits.push({ id: el.id, username: el.username}))
        return e => {
            
            newSplits = newSplits.slice(0, idx).concat(newSplits.splice(idx+1));

            this.handleUpdateSplits(newSplits);
        }
    }

    render() {

        let splitsList = this.props.friendsList.map((split, idx) => {
            // debugger
            if (split.id !== this.props.authorId) return (
                <li key={`split-${idx}`}>
                    <a className="fa fa-times" aria-hidden="true"
                        onClick={this.removeSplit(idx)} >x</a>{split.username}
                </li>
            );
        });

        // debugger

        let results = this.matcheFriend().map((result, i) => {
            return (
                <li key={i} onClick={this.addSplit}>{result}</li>
            );
        });

        return (
            <div>

                <ul className="splits-list clearfix">
                    <li >Split with</li>
                    {splitsList}
                </ul>

                <div className="splits-with-form">
                    <input
                        onChange={this.handleInput}
                        value={this.state.fInput}
                        placeholder='Split with...'
                        className="split-with-input"
                        id="split-with-input-box" />

                    <ul className=
                        {this.show ? "friends-list" : "hide-friends-list"}>
                        {results}
                    </ul>


                </div>


            </div>
        );
    }
}

