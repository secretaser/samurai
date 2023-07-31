const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
   newPostText: '',
   postData: [
      { id: 0, authorID: 228, likes: 0, text: 'Федук гавно' },
      { id: 1, authorID: 228, likes: 226, text: 'Идем с братвой раздавать федуку по ебалу' },
      { id: 2, authorID: 228, likes: 1653, text: 'Нам Элджей сдал его адрес и попросил сказать, что его ждет назад тыкать в зад тыкать в зад' },
      { id: 3, authorID: 228, likes: 1498, text: 'Мой дисс гавно с не самыми красивыми рифмами' },
   ]
}

const profile_reducer = (state = initialState, action) => {
   // debugger;
   switch (action.type) {
      case ADD_POST: {
         let newPost = {
            id: state.postData.length,
            authorID: 228,
            likes: 0,
            text: state.newPostText,
         };
         state.postData.push(newPost);
         state.newPostText = '';
         break;
      };
      case UPDATE_NEW_POST_TEXT: {
         state.newPostText = action.newPostText;
         break;
      };
   }

   return state
};

export const addPostCreator = () => ({ type: ADD_POST });

export const updateNewPostTextCreator = (text) => ({
   type: UPDATE_NEW_POST_TEXT,
   newPostText: text,
});

export default profile_reducer;