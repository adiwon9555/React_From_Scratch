import React,{Component} from "react";
import ChannelSection from './channels/channelSection';
import {hot} from "react-hot-loader";

class App extends Component{
    constructor(props){
        super(props);
        this.state={
            channels:[]
        };
    }
    addChannel(name){
        const {channels}=this.state;
        channels.push({name,key:channels.length});
        this.setState({channels});

    }
    setChannel(channel){
        console.log(channel.name);
    }
    render(){
        return(
            <div>
                <ChannelSection 
                    setChannel={this.setChannel.bind(this)}
                    addChannel={this.addChannel.bind(this)}
                    {...this.state}
                />
            </div>
        )
    }
}



export default hot(module)(App);