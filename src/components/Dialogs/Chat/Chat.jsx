import React from 'react';
import style from './css/Chat.module.css';
import Message from './../Message/Message'
<<<<<<< HEAD
import AddMessage from './AddMessage';
=======
>>>>>>> 5c0e6869ff15682da91c38fa3111f9977f394917

const Chat = (props) => {
   let messages = props.mesData.map(message => <Message text={message.text} sender={message.authorID} me={props.me} />);

<<<<<<< HEAD
   let addNewMessage = (values) => {
      let text = values.newMessageBody;
      if (text) {
         props.sendMessage(props.chat.id, text);
      }
   }
=======
   let textarea = React.createRef();

   let sendMessage = () => {
      if (textarea.current.value) {
         props.sendMessage();
      }
   };

   let onChange = (e) => {
      let text = e.target.value;
      props.onChange(text);
   };
>>>>>>> 5c0e6869ff15682da91c38fa3111f9977f394917

   return (
      <div className={style.chat}>
         <div className={style.chat_header}>
            <div className={style.header_ava}>
               <img src={props.chat.avaLink} alt="" />
            </div>
            <div className={style.header_name}>{props.chat.name}</div>
         </div>
         <div className={style.chat_content}>
            {messages}
         </div>
<<<<<<< HEAD
         <AddMessage onSubmit={addNewMessage} />
=======
         <div className={style.input_container}>
            <textarea ref={textarea} onChange={onChange} placeholder='Type your message...' value={props.chat.newMessageText} />
            <button onClick={sendMessage}>Send</button>
         </div>
>>>>>>> 5c0e6869ff15682da91c38fa3111f9977f394917
      </div>
   )
}

export default Chat;