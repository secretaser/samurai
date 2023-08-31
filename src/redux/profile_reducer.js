import { profileAPI } from "../api/api";

const ADD_POST = 'profile/ADD-POST';
const SET_PROFILE = 'profile/SET_PROFILE';
const SET_STATUS = 'profile/SET_STATUS';
const DELETE_POST = 'profile/DELETE_POST';
const SET_PHOTO_SUCCESS = 'profile/SET_PHOTO_SUCCESS';

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

      case DELETE_POST: {
         return { ...state, postData: state.postData.filter(p => p.id != action.postId) }
      }

      case SET_PROFILE: {
         return { ...state, profile: action.profile }
      };

      case SET_STATUS: {
         return { ...state, status: action.status }
      };

      case SET_PHOTO_SUCCESS: {
         // debugger
         return { ...state, profile: { ...state.profile, photos: action.photos } }
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

export const setPhotoSuccess = (photos) => ({ type: SET_PHOTO_SUCCESS, photos });

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

export const savePhoto = (photo) => async (dispatch) => {
   let data = await profileAPI.savePhoto(photo);
   if (data.resultCode === 0) dispatch(setPhotoSuccess(data.data.photos));
};

export default profile_reducer;