const SEND_MESSAGE = 'dialogs/SEND-MESSAGE';

let initialState = {
   me: {
      name: "Иван Суворин",
      id: 228,
      avaLink: 'https://kartinkof.club/uploads/posts/2022-04/1649621946_24-kartinkof-club-p-ugarnie-kartinki-dlya-avi-vk-26.jpg',
      coverLink: 'https://htmlcolorcodes.com/assets/images/html-color-codes-color-tutorials-hero.jpg'
   },
   dialogsData: [
      {
         name: "Лёха  Бицепс",
         id: 0,
         avaLink: "https://animatornsk.ru/wp-content/uploads/2018/02/minions_PNG66.png",
         mesData: [
            { id: 0, authorID: 0, text: 'Йоу, пойдешь в жопу ебаться?' },
            { id: 1, authorID: 0, text: 'Спиш?' },
            { id: 2, authorID: 0, text: 'Ну пойдем...' },
            // { id: 3, authorID: 228, text: 'Пашол нахуй' },
         ],
      },
      {
         name: "Данька Треугольник",
         id: 1,
         avaLink: "https://images.unsplash.com/photo-1583864697784-a0efc8379f70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
         mesData: [
            { id: 0, authorID: 1, text: 'Здравствуй прелость' },
            { id: 1, authorID: 1, text: 'Спиш?' },
            { id: 2, authorID: 1, text: 'Давай покажу коешто...' },
            { id: 3, authorID: 228, text: 'Пашол нахуй' },
         ],
      },
      {
         name: "Махмуд Насвай",
         id: 2,
         avaLink: "https://avatars.mds.yandex.net/i?id=88ce11fb0729993e22a9d86bf50b2b43c7a2cda1-5232193-images-thumbs&n=13",
         mesData: [
            { id: 0, authorID: 2, text: 'Здравствуй прелость' },
            { id: 1, authorID: 2, text: 'Спиш?' },
            { id: 2, authorID: 2, text: 'Давай покажу коешто...' },
            { id: 3, authorID: 228, text: 'Пашол нахуй' },
         ],
      },
      {
         name: "Аникей Две-Жиги",
         id: 3,
         avaLink: "https://smartpress.by/upload/slam.image/medialibrary/0a2/g2x89srj7nyuszulhnp0t8rahbkyj22c/1200_2000_1/pasha-tekhnik2-90.png",
         mesData: [
            { id: 0, authorID: 2, text: 'Здравствуй прелость' },
            { id: 1, authorID: 2, text: 'Спиш?' },
            { id: 2, authorID: 2, text: 'Давай покажу коешто...' },
            { id: 3, authorID: 228, text: 'Пашол нахуй' },
         ],
         avaLink: "https://uznayvse.ru/person/kirill-bledniy/kirill_bledniy02.jpg",
         mesData: [
            { id: 0, authorID: 2, text: 'Здравствуй прелость' },
            { id: 1, authorID: 2, text: 'Спиш?' },
            { id: 2, authorID: 2, text: 'Давай покажу коешто...' },
            { id: 3, authorID: 228, text: 'Пашол нахуй' },
         ],
      }
   ],
}

const dialogs_reducer = (state = initialState, action) => {
   switch (action.type) {

      case SEND_MESSAGE: {
         let dialog = state.dialogsData[action.dialogId];
         let newMessage = {
            id: dialog.mesData.length,
            authorID: state.me.id,
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

export const sendMessage = (id, newMessageBody) => ({
   type: SEND_MESSAGE,
   dialogId: id,
   newMessageBody: newMessageBody,
});

export default dialogs_reducer;