import React from 'react';
import Splits from './split/split';


class AddNote extends React.Component {
    constructor(props) {
        super(props);
        // debugger
        this.state = this.props
        this.handleSubmit = this.handleSubmit.bind(this);
    }



    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        let that = {
            id: this.state.id,
            amount: this.state.amount,
            equal: this.state.equal,
            description: this.state.description,
            date: this.state.date,
            note:this.state.note
        }
        debugger

        this.props.action(that)
        


        this.props.closeModal();
    }

    render() {

        return (
            <div>
                <h1>Add Note</h1>
                <form onSubmit={this.handleSubmit}>

                    <label>Note
                        <br/>
                    <textarea value={this.state.note}
                            onChange={this.update('note')}
                        />
                    </label>
                    
                    <br />
                    <br />
                    <div className='add-note'>
                        <button >Add Note</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddNote;