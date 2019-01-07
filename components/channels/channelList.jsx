import React,{Component} from "react";
import Channel from './channel';
import PropTypes from 'prop-types';

class ChannelList extends Component{
    
    render(){
        const {channels}=this.props;
        return(
            <ul>
                {channels.map(channel=>{
                    return <Channel channel={channel} {...this.props} key={channel.id}/>
                })
            }
                
            </ul>
        )
    }
}

ChannelList.propTypes={
    channels:PropTypes.array.isRequired,
    setChannel:PropTypes.func.isRequired,
    activeChannel:PropTypes.object.isRequired
}

export default ChannelList;