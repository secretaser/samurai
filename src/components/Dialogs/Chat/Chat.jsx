import React, { useEffect, useRef, useState } from 'react';
import style from './css/Chat.module.css';
import Message from './../Message/Message'
import AddMessage from './AddMessage';

const Chat = (props) => {
   let messages = props.mesData.map(message => <Message text={message.text} sender={message.authorID} me={props.me} />);
   const chatRef = useRef()
   useEffect(() => {
      chatRef.current.scrollTop = chatRef.current.scrollHeight
   }, [props.mesData]);

   let addNewMessage = (values) => {
      if (values.newMessageBody.trim()) {
         props.sendMessageThunk(props.chat.id, values.newMessageBody.trim(), props.me)
      }
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