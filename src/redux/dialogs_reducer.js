const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

const dialogs_reducer = (state, action) => {

   switch (action.type) {
      case UPDATE_NEW_MESSAGE_TEXT: {
         state.dialogsData[action.dialogId].newMessageText = action.newMessageText;
         break;
      };
      case SEND_MESSAGE: {
         let dialog = state.dialogsData[action.dialogId];
         let messages = dialog.mesData;
         let newMessage = {
            id: messages[messages.length],
            authorID: state.me.id,
            text: state.dialogsData[action.dialogId].newMessageText
         };
         messages.push(newMessage);
         state.dialogsData[action.dialogId].newMessageText = '';
         break;
      }
   }

   return state
};

export const sendMessageCreator = (id) => ({
   type: SEND_MESSAGE,
   dialogId: id
});

export const updateNewMessageTextCreator = (text, id) => ({
   type: UPDATE_NEW_MESSAGE_TEXT,
   dialogId: id,
   newMessageText: text,
});


export default dialogs_reducer;