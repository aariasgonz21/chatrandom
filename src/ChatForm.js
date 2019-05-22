import React, { Component } from 'react';
import io from "socket.io-client"

class ChatForm extends Component{
  constructor(props){
    super(props);
    this.state = {
        username: "",
        message: "",
        messages: []
    }
    this.socket = io('localhost:8080');

    this.sendMessage = e => {
      e.preventDefault();
      this.socket.emit('SEND_MESSAGE', {
        username: this.state.username,
        message: this.state.message
      });
      this.setState({message: ''});
    }
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render(){
    console.log(this.state.message)
    return(
      <div>
        <form className="form-group" onSubmit={this.sendMessage}>
          <input className="form-control" placeholder="username" name="username" value={this.state.username} onChange={this.changeHandler}/>
          <input className="form-control" placeholder="mmm whatcha say..." name="message" onChange={this.changeHandler} value={this.state.message}/>
          <button className="btn btn-primary">Send</button>
        </form>
      </div>
    );
  }
}

export default ChatForm;
