import React,{Component} from "react";
import PropTypes from 'prop-types';

class ChannelForm extends Component{
    onSubmit(e){
        e.preventDefault();
        const node=this.refs.channel;
        const name=node.value;
        this.props.addChannel(name);
        node.value='';
    }
    render(){
        return(
            <form onSubmit={this.onSubmit.bind(this)}>
                <input type="text" ref='channel'/>
            </form>
        )
    }
}

ChannelForm.propTypes={
    addChannel:PropTypes.func.isRequired
}

export default ChannelForm;