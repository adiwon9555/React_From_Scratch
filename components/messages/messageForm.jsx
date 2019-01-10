import React, { Component } from "react";
import PropTypes from 'prop-types';

class MessageForm extends Component {
    onSubmit(e) {
        e.preventDefault();
        const node = this.refs.message;
        const name = node.value;
        this.props.addMessage(name);
        node.value = '';
    }
    render() {
        let input;
        const {activeChannel}=this.props;
        if(activeChannel.id!==undefined)
        {
            input=(
                <input
                        className='form-control'
                        placeholder='Add Message'
                        type='text'
                        ref='message'
                    />
            )
        }
        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                
                <div className='form-group'>
                    {input}
                </div>
            </form>

        )
    }
}

MessageForm.propTypes = {
    addMessage: PropTypes.func.isRequired,
    activeChannel:PropTypes.object.isRequired
}

export default MessageForm;