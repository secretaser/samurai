import React, { useEffect, useRef } from 'react';
import style from './css/Chat.module.css';
import Message from './../Message/Message'
import AddMessage from './AddMessage';

const Chat = (props) => {
   console.log(props);
   let messages = props.mesData.map(message => <Message text={message.text} sender={message.authorID} me={props.me} />);
   let textarea;
   const chatRef = useRef()
   useEffect(() => {
      window.addEventListener('input', handle)
      window.addEventListener('click', handle)
      return () => {
         window.removeEventListener('input', handle)
         window.removeEventListener('click', handle)
      };
   }, []);

   useEffect(() => {
      chatRef.current.scrollTop = chatRef.current.scrollHeight
   }, [props.mesData]);

   const handle = (e) => {
      if (e.target.className == style.input_container__input) {
         textarea = e.target
         // let rows = e.target.innerHTML.split('\n').length
         // if (rows < 8) textarea.rows = rows
         textarea.style.height = 0 + 'px'
         textarea.style.height = textarea.scrollHeight + 'px'
      }
      if (e.target.className == style.input_container__button) {
         textarea.style.height = 0 + 'px'
      }
   }
   let addNewMessage = (values) => {
      props.sendMessageThunk(props.chat.id, values.newMessageBody, props.me);
   }

   return (
      <div className={style.chat}>
         <div className={style.chat_header}>
            <div className={style.header_ava}>
               <img src={props.chat.avaLink} alt="" />
            </div>
            <div className={style.header_name}>{props.chat.name}</div>
         </div>
         <div ref={chatRef} className={style.chat_content}>
            {messages}
         </div>
         <AddMessage onSubmit={addNewMessage} />
      </div>
   )
}

export default Chat;