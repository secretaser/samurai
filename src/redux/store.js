import dialogs_reducer from "./dialogs_reducer";
import profile_reducer from "./profile_reducer";
import navbar_reducer from "./navbar_reducer";

let store = {
   _state: {
      me: {
         name: "Иван Суворин",
         id: 228,
         avaLink: 'https://kartinkof.club/uploads/posts/2022-04/1649621946_24-kartinkof-club-p-ugarnie-kartinki-dlya-avi-vk-26.jpg',
      },
      profilePage: {
         newPostText: '',
         postData: [
            { id: 0, authorID: 228, likes: 0, text: 'Федук гавно' },
            { id: 1, authorID: 228, likes: 226, text: 'Идем с братвой раздавать федуку по ебалу' },
            { id: 2, authorID: 228, likes: 1653, text: 'Нам Элджей сдал его адрес и попросил сказать, что его ждет назад тыкать в зад тыкать в зад' },
            { id: 3, authorID: 228, likes: 1498, text: 'Мой дисс гавно с не самыми красивыми рифмами' },
         ],
      },
      dialogsPage: {
         me: {
            name: "Иван Суворин",
            id: 228,
            avaLink: 'https://kartinkof.club/uploads/posts/2022-04/1649621946_24-kartinkof-club-p-ugarnie-kartinki-dlya-avi-vk-26.jpg',
         },
         dialogsData: [
            {
               name: "Лёха  Бицепс",
               id: 0,
               avaLink: "data:image/jpeg;base64,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",
               mesData: [
                  { id: 0, authorID: 0, text: 'Йоу, пойдешь в жопу ебаться?' },
                  { id: 1, authorID: 0, text: 'Спиш?' },
                  { id: 2, authorID: 0, text: 'Ну пойдем...' },
                  // { id: 3, authorID: 228, text: 'Пашол нахуй' },
               ],
               newMessageText: '',
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
               newMessageText: '',
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
               newMessageText: '',
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
               newMessageText: '',
            },
            {
               name: "Илюха Понтерштерн",
               id: 4,
               avaLink: "https://uznayvse.ru/person/kirill-bledniy/kirill_bledniy02.jpg",
               mesData: [
                  { id: 0, authorID: 2, text: 'Здравствуй прелость' },
                  { id: 1, authorID: 2, text: 'Спиш?' },
                  { id: 2, authorID: 2, text: 'Давай покажу коешто...' },
                  { id: 3, authorID: 228, text: 'Пашол нахуй' },
               ],
               newMessageText: '',
            }
         ],
      },
      navBarData: {
         friendsList: [
            { name: "Лёха  Бицепс", id: 0, avaLink: "data:image/jpeg;base64,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" },
            { name: "Данька Треугольник", id: 1, avaLink: "https://images.unsplash.com/photo-1583864697784-a0efc8379f70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80" },
            { name: "Махмуд Насвай", id: 2, avaLink: "https://avatars.mds.yandex.net/i?id=88ce11fb0729993e22a9d86bf50b2b43c7a2cda1-5232193-images-thumbs&n=13" },
            { name: "Аникей Две-Жиги", id: 3, avaLink: "https://smartpress.by/upload/slam.image/medialibrary/0a2/g2x89srj7nyuszulhnp0t8rahbkyj22c/1200_2000_1/pasha-tekhnik2-90.png" },
            { name: "Илюха Понтерштерн", id: 4, avaLink: "https://uznayvse.ru/person/kirill-bledniy/kirill_bledniy02.jpg" },
         ],
      },
   },

   getState() {
      return this._state;
   },

   _callSubscriber() {
      console.log('state changed');
   },

   subscribe(observer) {
      this._callSubscriber = observer;
   },

   dispatch(action) {
      this._state.profilePage = profile_reducer(this._state.profilePage, action);
      this._state.dialogsPage = dialogs_reducer(this._state.dialogsPage, action);
      this._state.navBarData = navbar_reducer(this._state.navBarData, action);

      this._callSubscriber(this._state);
   },
};


window.store = store;
export default store;