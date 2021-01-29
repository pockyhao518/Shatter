import React from 'react';

export default class CenterDashboard extends React.Component {

    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(modal) {
        let that = this;
        return e => {
            e.preventDefault();
            const authorId = that.props.currentUser.id ? that.props.currentUser.id : null;
            const friends = that.props.friends;
            const splits = that.props.splits;
            this.props.openModal({ modal: modal, authorId: authorId, friends:friends, splits:splits})
        }
    }

    render() {
        return (
            <div className="center-dashboard">
                <header>{this.props.header}</header>
                <div>
                    <button className="add-bill"
                        onClick={this.handleClick('create-bill')}
                    >Add an Bill</button>
                    {/* <button className="settle"
                        onClick={this.handleClick('settle')}
                    >Settle</button> */}
                </div>
            </div>
        )
    }

}