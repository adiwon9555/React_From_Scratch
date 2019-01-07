import React,{Component} from "react";
import Message from './message';
import PropTypes from 'prop-types';

class MessageList extends Component{
    onClick(e){
        e.preventDefault();
        const {message,setMessage}=this.props;
        setMessage(message);
    }
    render(){
        const {messages}=this.props;
        return(
            <ul>
                {messages.map(message=>{
                    return <Message message={message} {...this.props} key={message.id}/>
                })
            }
                
            </ul>
        )
    }
}

MessageList.propTypes={
    messages:PropTypes.array.isRequired,

}

export default MessageList;