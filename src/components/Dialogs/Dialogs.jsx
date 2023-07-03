import React from 'react';
import style from './css/Dialogs.module.css';
import Dialogs__item from './Dialogs__item/Dialogs__item';
import Message from './Message/Message';

const Dialogs = (props) => {

   let dialogs = props.dialogs.dialogsData.map(dialog => <Dialogs__item name={dialog.name} id={dialog.id} lastMes={dialog.lastMes} avaLink={dialog.avaLink} />)
   let messages = props.dialogs.mesData.map(message => <Message text={message.text} sender={message.authorID} me={props.me} />);

   let inputElement = React.createRef();

   let sendMessage = () => {
      let text = inputElement.current.value;
      alert(text);
   }
   return (
      <div className={style.content}>
         <div className={style.dialogs}>

            {dialogs}

         </div>
         <div className={style.chat}>
            <div className={style.chat_header}>
               <div className={style.header_ava}>
                  <img src="https://avatars.mds.yandex.net/i?id=88ce11fb0729993e22a9d86bf50b2b43c7a2cda1-5232193-images-thumbs&n=13" alt="" />
               </div>
               <div className={style.header_name}>Махмуд Насвай</div>
            </div>
            <div className={style.chat_content}>

               {messages}

            </div>
            <div className={style.input_container}>
               {/* <textarea ref={inputElement} placeholder='Type your message...' value={'Хочу, бля, сказать этому ёбаному Обэме нахуй, блять ебомбаный... Ёбаный ты козёл нахуй, черножопый, блять, был бы ты человек нахуй. Твою дочку ебут нахуй, где-нибудь, нахуй, блять, она, наверно, учится хуй знает где нахуй, бля, а дети гибнут на Украине нахуй, почему так нахуй?'} /> */}
               <textarea ref={inputElement} placeholder='Type your message...' />
               <button onClick={sendMessage}>Send</button>
            </div>
         </div>
      </div >
   )
}

export default Dialogs;