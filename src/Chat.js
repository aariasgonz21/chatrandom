import React,{ Component } from 'react';
import './App.scss';
import ChatForm from './ChatForm'
import Messages from './Messages'
import io from "socket.io-client";

class Chat extends Component{
  constructor(props){
    super(props);
    this.state = {
          username: '',
          message: '',
          messages: []
      };
    this.socket = io('localhost:8080');
    this.socket.on('RECEIVE_MESSAGE', function(data){
      addMessage(data);
    });

    const addMessage = data => {
      console.log(data);
      this.setState({messages: [...this.state.messages, data]});
      console.log(this.state.messages);
    };
  }

  render(){
    return(
      <div>
        <Messages messages={this.state.messages} username={this.state.username}/>
        <ChatForm message={this.state.message} username={this.state.username}/>
      </div>
    );
  };
};

export default Chat;
