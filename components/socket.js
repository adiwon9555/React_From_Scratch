import {EventEmitter} from 'events';

class Socket{
    constructor(ws=new WebSocket(),ee=new EventEmitter()){
        this.ws=ws;
        this.ee=ee;
        ws.onmessage=this.message.bind(this);
        ws.onopen=this.open.bind(this);
        ws.onclose=this.close.bind(this);
    }
    on(name,fn){
        this.ee.on(name,fn);
    }
    off(name,fn){
        this.ee.removeListener(name,fn);
    }
    message(e){
        try {
            const event=JSON.parse(e.data);
            this.ee.emit(event.name,event.data);
        } catch (error) {
            this.ee.emit('error',error);
        }
    }
    open(){
        this.ee.emit('connect');
    }
    close(){
        this.ee.emit('disconnect');
    }
}

export default Socket;