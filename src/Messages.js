import React from 'react';

const Messages = (props) => (
  <div className="container">
    <h2 className="title-2">Let's Chat!</h2>
    <div>
    {props.messages.map(message => {
        return (
            <div className="messages">{message.username}: {message.message}</div>
        )
    })}
</div>
  </div>
);
export default Messages;
