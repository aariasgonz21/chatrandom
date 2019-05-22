import React, { useState } from 'react';
import ChatForm from './ChatForm'
import Messages from './Messages'

function Chat(props){
  const [username, setUsername] = useState('')
  const [message, setMessage] = useState('')

  return(
    <div>
      <Messages message={message} username={username}/>
      <ChatForm message={message} username={username}/>
    </div>
  )
};

export default Chat;
