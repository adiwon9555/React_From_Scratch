import React,{Component} from "react";
import Channel from './channel';
import PropTypes from 'prop-types';

class ChannelList extends Component{
    onClick(e){
        e.preventDefault();
        const {channel,setChannel}=this.props;
        setChannel(channel);
    }
    render(){
        const {channels}=this.props;
        return(
            <ul>
                {channels.map(channel=>{
                    return <Channel channel={channel} setChannel={this.props.setChannel} key={channel.key}/>
                })
            }
                
            </ul>
        )
    }
}

ChannelList.propTypes={
    channels:PropTypes.array.isRequired,
    setChannel:PropTypes.func.isRequired
}

export default ChannelList;