import { profileAPI } from "../api/api";

<<<<<<< HEAD
const ADD_POST = 'profile/ADD-POST';
const SET_PROFILE = 'profile/SET_PROFILE';
const SET_STATUS = 'profile/SET_STATUS';
const DELETE_POST = 'profile/DELETE_POST';

let initialState = {
=======
let initialState = {
   newPostText: '',
>>>>>>> 5c0e6869ff15682da91c38fa3111f9977f394917
   postData: [
      { id: 0, authorID: 228, likes: 0, text: 'Федук гавно' },
      { id: 1, authorID: 228, likes: 226, text: 'Идем с братвой раздавать федуку по ебалу' },
      { id: 2, authorID: 228, likes: 1653, text: 'Нам Элджей сдал его адрес и попросил сказать, что его ждет назад тыкать в зад тыкать в зад' },
      { id: 3, authorID: 228, likes: 1498, text: 'Мой дисс гавно с не самыми красивыми рифмами' },
   ],
<<<<<<< HEAD
   profile: null,
   status: '',
}

const profile_reducer = (state = initialState, action) => {
=======
}
>>>>>>> 5c0e6869ff15682da91c38fa3111f9977f394917

const profile_reducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_POST: {
         let newPost = {
            id: state.postData.length,
            authorID: 228,
            likes: 0,
            text: action.postBody,
         };
         return {
            ...state,
            postData: [...state.postData, newPost],
            newPostText: '',
         };
      };

      case DELETE_POST: {
         return { ...state, postData: state.postData.filter(p => p.id != action.postId) }
      }

      case SET_PROFILE: {
         return { ...state, profile: action.profile }
      };

      case SET_STATUS: {
         return { ...state, status: action.status }
      };

      default:
         return state;
   }
};

// ACTION CREATORS
export const addPost = (postBody) => ({ type: ADD_POST, postBody });

export const deletePost = (postId) => ({ type: DELETE_POST, postId });

export const setProfile = (profile) => ({ type: SET_PROFILE, profile });

export const setStatus = (status) => ({ type: SET_STATUS, status });

// THUNKS
export const getProfile = (id) => async (dispatch) => {
   let data = await profileAPI.getProfile(id);
   dispatch(setProfile(data));
};

export const getStatus = (id) => async (dispatch) => {
   let data = await profileAPI.getStatus(id);
   dispatch(setStatus(data));
};

export const updateStatus = (status) => async (dispatch) => {
   let data = await profileAPI.updateStatus(status);
   if (data.resultCode === 0) dispatch(setStatus(status));
};

export default profile_reducer;