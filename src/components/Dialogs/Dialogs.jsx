import React from 'react';
import style from './css/Dialogs.module.css';
import Dialogs__item from './Dialogs__item/Dialogs__item';
import Chat from './Chat/Chat';
import { Route, Routes } from 'react-router-dom';

const Dialogs = (props) => {

   let getLastMes = (dialog) => {
      return dialog.mesData[dialog.mesData.length - 1].text;
   };

   let dialogs = props.dialogs.dialogsData.map(dialog => <Dialogs__item name={dialog.name} id={dialog.id} lastMes={getLastMes(dialog)} avaLink={dialog.avaLink} />)
   let chats = props.dialogs.dialogsData.map(chat => <Route path={`/${chat.id}`} element={<Chat chat={chat} me={props.me} dispatch={props.dispatch} />} />)

   return (
      <div className={style.content}>
         <div className={style.dialogs}>
            {dialogs}
         </div>
         <Routes>
            {chats}
         </Routes>
      </div >
   )
}

export default Dialogs;