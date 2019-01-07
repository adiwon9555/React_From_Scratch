import React, { Component } from "react";
import ChannelSection from './channels/channelSection';
import UserSection from './users/userSection';
import MessageSection from './messages/messageSection';
import { hot } from "react-hot-loader";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            channels: [],
            activeChannel:{},
            users:[],
            activeUser:{},
            messages:[]
        };
    }
    addChannel(name) {
        const { channels } = this.state;
        channels.push({ name, id: channels.length});
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
    setUserName(name) {
        const { users } = this.state;
        users.push({ name, id: users.length });
        this.setState({ users });

    }
    setUser(user) {
        console.log(user.name);
        var activeUser=user;
        this.setState({activeUser});
    }
    addMessage(name) {
        const { messages,users } = this.state;
        const createdAt=new Date();
        const author=users.length!=0?users[0].name:'anonymous'; 
        messages.push({ body, id: messages.length,createdAt,author });
        this.setState({ messages });
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
                    <UserSection
                        {...this.state}
                        addUser={this.addUser.bind(this)}
                        setUser={this.setUser.bind(this)}
                    />
                    <MessageSection
                        {...this.state}
                        addMessage={this.addMessage.bind(this)}
                        setMessage={this.setMessage.bind(this)}
                    />
                </div>
            </div>

        )
    }
}



export default hot(module)(App);