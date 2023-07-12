import React from 'react';
import style from './css/Chat.module.css';
import Message from './../Message/Message'
import { updateNewMessageTextCreator, sendMessageCreator } from '../../../redux/dialogs_reducer';

const Chat = (props) => {
   let messages = props.chat.mesData.map(message => <Message text={message.text} sender={message.authorID} me={props.me} />);

   let sendMessage = (e) => {
      let text = props.chat.newMessageText;
      if (text) {
         props.dispatch(sendMessageCreator(props.chat.id));
         // props.dispatch(updateNewMessageTextCreator('', props.chat.id))
      }
   };

   let onChange = (e) => {
      let text = e.target.value;
      props.dispatch(updateNewMessageTextCreator(text, props.chat.id));
   };

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
         <div className={style.input_container}>
            <textarea onChange={onChange} placeholder='Type your message...' value={props.chat.newMessageText} />
            <button onClick={sendMessage}>Send</button>
         </div>
      </div>
   )
}

export default Chat;