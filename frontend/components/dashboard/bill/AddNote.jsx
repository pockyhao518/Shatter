import React from 'react';
import Splits from './split/split';


class AddNote extends React.Component {
    constructor(props) {
        super(props);
        // debugger
        this.state = {
            id: this.props.id,
            amount: this.props.amount,
            equal: this.props.equal,
            description: this.props.description,
            date: this.props.date,
            note: this.props.note
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }



    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        
        debugger

        this.props.action(this.state)
        


        this.props.closeModal();
    }

    render() {

        return (
            <div>
                <h1>Add Comment</h1>
                <form onSubmit={this.handleSubmit}>

                    <label>Comment
                        <br/>
                    <textarea value={this.state.note}
                            onChange={this.update('note')}
                        />
                    </label>
                    
                    <br />
                    <br />
                    <div className='add-note'>
                        <button >Add Comment</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddNote;