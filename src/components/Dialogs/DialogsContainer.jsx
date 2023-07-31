import React from 'react';
import Dialogs from './Dialogs';
import { sendMessageCreator, updateNewMessageTextCreator } from '../../redux/dialogs_reducer';

const DialogsContainer = (props) => {

   let sendMessage = (id) => {
      props.store.dispatch(sendMessageCreator(id));
   }
   let changeMessageText = (text, id) => {
      props.store.dispatch(updateNewMessageTextCreator(text, id));
   }

   return (<Dialogs sendMessage={sendMessage} changeMessageText={changeMessageText}
      dialogs={props.store.getState().dialogsPage}
      me={props.store.getState().me} />
   )
}

export default DialogsContainer;