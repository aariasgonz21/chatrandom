import React, {useState} from 'react';

function ChatForm(props){
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const [messages, subMessages] = useState([]);
  function unChangeHandler(e) { setUsername(e.target.value);}
  function messChangeHandler(e) { setMessage(e.target.value);}
  // function subMessages(e){
  // }

  return(
    <div>
      <form className="form-group" onSubmit={subMessages}>
        <input className="form-control" placeholder="username" name="username" value={username} onChange={unChangeHandler}/>
        <input className="form-control" placeholder="mmm whatcha say..." name="message" onChange={messChangeHandler} value={message}/>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default ChatForm;
