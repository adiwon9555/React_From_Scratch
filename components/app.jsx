import React, { Component } from "react";
import ChannelSection from './channels/channelSection';
import UserSection from './users/userSection';
import Socket from './socket';

import MessageSection from './messages/messageSection';
import { hot } from "react-hot-loader";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            channels: [],
            activeChannel:{},
            currentUser:{},
            users:[],
            activeUser:{},
            messages:[],
            connected:false
        };
    }
    componentDidMount(){
        let ws=new WebSocket("ws://localhost:4001")
        let socket=this.socket=new Socket(ws);
        socket.on('connect',this.onConnect.bind(this));
        socket.on('disconnect',this.onDisconnect.bind(this));
        socket.on('channel add',this.onAddChannel.bind(this));
        socket.on('user remove',this.onRemoveUser.bind(this));
        socket.on('user edit',this.onEditUser.bind(this));
        socket.on('user add',this.onAddUser.bind(this));
        socket.on('message add',this.onAddMessage.bind(this));
        

    }
    onAddChannel(channel){
        const { channels } = this.state;
        channels.push(channel);
        this.setState({ channels });
    }
    onRemoveUser(user){
        let { users } = this.state;
        users=users.filter(u=>u.id!==user.id)
        this.setState({ users });
    }
    onEditUser(user){
        let { users } = this.state;
        users=users.map(u=>{
            if(u.id==user.id){
                return user;
            }
            else{
                return u;
            }
        })
        this.setState({ users });
    }
    onAddUser(user){
        this.setState({currentUser:user})
        // console.log(currentUser);
        
        const { users } = this.state;
        users.push(user);
        this.setState({ users });
    }
    onAddMessage(message){
        const { messages } = this.state;
        messages.push(message);
        this.setState({ messages });
    }
    onConnect(){
        
        this.setState({
            connected:true
        })
        this.socket.emit('channel subscribe');
        this.socket.emit('user subscribe');
    }
    onDisconnect(){
        // this.socket.emit('user unsubscribe',{id:currentUser.id});    
        this.setState({
            connected:false
        })
    }
    addChannel(name) {

        this.socket.emit('channel add',{name});
    }
    setChannel(channel) {
        console.log(channel.name);
        var activeChannel=channel;
        this.setState({activeChannel});
        
        // this.socket.emit('message unsubscribe');
        this.setState({messages:[]});
        this.socket.emit('message subscribe',{
            channelId:activeChannel.id
        });
        

    }
    setUserName(name) {
        let {currentUser}=this.state;
        currentUser.name=name 
        this.socket.emit('user edit',currentUser);
    }
    setUser(user) {
        console.log(user.name);
        var activeUser=user;
        this.setState({activeUser});
    }
    addMessage(body) {
        let {activeChannel,currentUser}=this.state;
        this.socket.emit('message add',{channelId:activeChannel.id ,body,author:currentUser.name});
    }
    render() {
        return (
            <div className='app'>
                <div className='nav'>
                    <ChannelSection {...this.state}
                        addChannel={this.addChannel.bind(this)}
                        setChannel={this.setChannel.bind(this)}
                    />
                    <UserSection
                        {...this.state}
                        setUserName={this.setUserName.bind(this)}
                        setUser={this.setUser.bind(this)}
                    />
                    
                </div>
                <MessageSection
                        {...this.state}
                        addMessage={this.addMessage.bind(this)}
                    />
            </div>

        )
    }
}



export default hot(module)(App);