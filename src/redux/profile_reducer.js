const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profile_reducer = (state, action) => {

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