import { updateNewMessageTextCreator, sendMessageCreator } from '../../../redux/dialogs_reducer';
import Chat from './Chat';

const Chat_container = (props) => {

   let sendMessage = () => {
      let myID = props.store.getState().me.id;
      props.store.dispatch(sendMessageCreator(props.store.getState().dialogsPage.dialogsData[props.chatID].id, myID));
   };

   let onChange = (text) => {
      props.store.dispatch(updateNewMessageTextCreator(text, props.store.getState().dialogsPage.dialogsData[props.chatID].id));
   };

   return (
      <Chat onChange={onChange}
         sendMessage={sendMessage}
         mesData={props.store.getState().dialogsPage.dialogsData[props.chatID].mesData}
         chat={props.store.getState().dialogsPage.dialogsData[props.chatID]}
         me={props.store.getState().me} />
   )
}

export default Chat_container;