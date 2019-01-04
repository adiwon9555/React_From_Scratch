import React, { Component } from "react";
import ChannelSection from './channels/channelSection';
import { hot } from "react-hot-loader";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            channels: [],
            activeChannel:{}
        };
    }
    addChannel(name) {
        const { channels } = this.state;
        channels.push({ name, key: channels.length,active:false });
        this.setState({ channels });

    }
    setChannel(channel) {
        console.log(channel.name);
        // const {channels}=this.state;
        // var chs=channels.map(c=>{
        //     if(c.key==channel.key){
        //         c.active=true;
        //         return c;
        //     }else{
        //         c.active=false;
        //         return c;
        //     }
        // })
        var activeChannel=channel;
        this.setState({activeChannel});
    }
    render() {
        return (
            <div className='app'>
                <div className='nav'>
                    <ChannelSection
                        {...this.state}
                        addChannel={this.addChannel.bind(this)}
                        setChannel={this.setChannel.bind(this)}
                    />
                </div>
            </div>

        )
    }
}



export default hot(module)(App);