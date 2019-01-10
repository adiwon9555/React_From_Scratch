import React, { Component } from "react";
import MessageForm from './messageForm';
import MessageList from './messageList';
import PropTypes from 'prop-types';

class MessageSection extends Component {

    render() {
        const {activeChannel}=this.props;
        return (
            <div className='messages-container panel panel-default'>
                <div className='panel-heading'>
                    <strong>{activeChannel.name!=undefined?activeChannel.name:'Select a channel'}</strong>
                </div>
                <div className='panel-body messages'>
                    <MessageList {...this.props} />
                    <MessageForm {...this.props} />
                </div>
            </div>
        )
    }
}

MessageSection.propTypes = {
    messages: PropTypes.array.isRequired,
    addMessage: PropTypes.func.isRequired,
    activeChannel:PropTypes.object.isRequired
}

export default MessageSection;