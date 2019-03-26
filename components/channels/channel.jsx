import React,{Component} from "react";
import PropTypes from 'prop-types';

class Channel extends Component{
    onClick(e){
        e.preventDefault();
        const {channel,setChannel}=this.props;
        setChannel(channel);
        // console.log(channel);
        

    }
    render(){
        const {activeChannel,channel}=this.props;
        
        return(
            // <li className={this.props.channel.active==true?'active':''}>
            <li className={activeChannel===channel?'active':''} >
                <a onClick={this.onClick.bind(this)}>
                    {this.props.channel.name}
                </a>
            </li>
        )
    }
}

Channel.propTypes={
    channel:PropTypes.object.isRequired,
    setChannel:PropTypes.func.isRequired,
    activeChannel:PropTypes.object.isRequired
}

export default Channel;