import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_PROFILE = 'SET_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
   postData: [
      { id: 0, authorID: 228, likes: 0, text: 'Федук гавно' },
      { id: 1, authorID: 228, likes: 226, text: 'Идем с братвой раздавать федуку по ебалу' },
      { id: 2, authorID: 228, likes: 1653, text: 'Нам Элджей сдал его адрес и попросил сказать, что его ждет назад тыкать в зад тыкать в зад' },
      { id: 3, authorID: 228, likes: 1498, text: 'Мой дисс гавно с не самыми красивыми рифмами' },
   ],
   profile: null,
   status: '',
}

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

export const setProfile = (profile) => ({ type: SET_PROFILE, profile });

export const setStatus = (status) => ({ type: SET_STATUS, status });

// THUNKS
export const getProfile = (id) => (dispatch) => {
   profileAPI.getProfile(id).then(data => {
      dispatch(setProfile(data));
   })
};

export const getStatus = (id) => (dispatch) => {
   profileAPI.getStatus(id).then(data => {
      dispatch(setStatus(data));
   })
};

export const updateStatus = (status) => (dispatch) => {
   profileAPI.updateStatus(status).then(data => {
      if (data.resultCode === 0) dispatch(setStatus(status));
   })
};

export default profile_reducer;