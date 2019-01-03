import React,{Component} from "react";
import PropTypes from 'prop-types';

class Channel extends Component{
    onClick(e){
        e.preventDefault();
        const {channel,setChannel}=this.props;
        setChannel(channel);
    }
    render(){
        return(
            <li>
                <a onClick={this.onClick.bind(this)}>
                    {this.props.channel.name}
                </a>
            </li>
        )
    }
}

Channel.propTypes={
    channel:PropTypes.object.isRequired,
    setChannel:PropTypes.func.isRequired
}

export default Channel;