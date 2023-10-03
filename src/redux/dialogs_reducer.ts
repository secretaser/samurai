import { reset } from "redux-form";
import { dialogsDataType, meType } from "../types/types";

let SEND_MESSAGE = 'dialogs/SEND-MESSAGE';

type initialStateType = {
   dialogsData: dialogsDataType
}
let initialState: initialStateType = {
   dialogsData: [
      {
         name: "Mr. Biceps",
         id: 0,
         avaLink: "https://animatornsk.ru/wp-content/uploads/2018/02/minions_PNG66.png",
         mesData: [
            { id: 0, authorID: 0, text: 'Привет, спиш?...' },
            { id: 1, authorID: 0, text: 'Как дела?' },
            { id: 2, authorID: 0, text: 'Чего молчиш...' },
         ],
      },
      {
         name: "Danya the Triangle",
         id: 1,
         avaLink: "https://images.unsplash.com/photo-1583864697784-a0efc8379f70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
         mesData: [
            { id: 0, authorID: 1, text: 'Привет, спиш?...' },
            { id: 1, authorID: 1, text: 'Как дела?' },
            { id: 2, authorID: 1, text: 'игнор...' },
         ],
      },
      {
         name: "Dasha",
         id: 2,
         avaLink: "https://avatars.mds.yandex.net/i?id=88ce11fb0729993e22a9d86bf50b2b43c7a2cda1-5232193-images-thumbs&n=13",

         mesData: [
            { id: 0, authorID: 2, text: 'Привет, спиш?...' },
            { id: 1, authorID: 2, text: 'Как дела?' },
            { id: 2, authorID: 2, text: 'Как погода?' },
         ],
      },
      {
         name: "Gleb Two-Lights",
         id: 3,
         avaLink: "https://smartpress.by/upload/slam.image/medialibrary/0a2/g2x89srj7nyuszulhnp0t8rahbkyj22c/1200_2000_1/pasha-tekhnik2-90.png",
         mesData: [
            { id: 0, authorID: 3, text: 'Привет, спиш?...' },
            { id: 1, authorID: 3, text: 'Как дела?' },
            { id: 2, authorID: 3, text: 'Как погода?' },
         ],
      },
      {
         name: "Ilya Pontershtern",
         id: 4,
         avaLink: "https://uznayvse.ru/person/kirill-bledniy/kirill_bledniy02.jpg",
         mesData: [
            { id: 0, authorID: 4, text: 'Привет, спиш?...' },
            { id: 1, authorID: 4, text: 'Как дела?' },
            { id: 2, authorID: 4, text: 'Как погода?' },
         ],
      }
   ],
}

const dialogs_reducer = (state = initialState, action: any): initialStateType => {
   switch (action.type) {

      case SEND_MESSAGE: {
         let dialog = state.dialogsData[action.dialogId];
         let newMessage = {
            id: dialog.mesData.length,
            authorID: action.sender,
            text: action.newMessageBody
         };
         return {
            ...state,
            dialogsData: state.dialogsData.map(d => {
               if (d.id === action.dialogId) {
                  return {
                     ...d,
                     mesData: [...d.mesData, newMessage],
                     newMessageText: ''
                  }
               }
               return d;
            })
         }
      };

      default:
         return state;
   }
};

type sendMessageActionType = {
   type: typeof SEND_MESSAGE
   dialogId: number
   newMessageBody: string
   sender: number
}

export const sendMessage = (id: number, newMessageBody: string, sender: number): sendMessageActionType => {
   return ({ type: SEND_MESSAGE, dialogId: id, newMessageBody, sender });
}

export const sendMessageThunk = (id: number, newMessageBody: string, sender: number) => (dispatch: any) => {
   dispatch(sendMessage(id, newMessageBody, sender));
   dispatch(reset('addMessage'));
};

export default dialogs_reducer;