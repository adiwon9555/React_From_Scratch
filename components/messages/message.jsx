import React,{Component} from "react";
import PropTypes from 'prop-types';

class Message extends Component{
   
    render(){
        const {message}=this.props;
        
        return(
            // <li className={this.props.message.active==true?'active':''}>
            <li className="message" >
                <div className="author">
                    <strong>{message.author}</strong>
                    <i className="timestamp">{message.createdAt}</i>
                </div>
                <div className="body">
                    {message.body}
                </div>
            </li>
        )
    }
}

Message.propTypes={
    message:PropTypes.object.isRequired,
    
}

export default Message;