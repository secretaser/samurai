import { stopSubmit } from "redux-form";
import { profileAPI } from "../api/api";

const ADD_POST = 'profile/ADD-POST';
const SET_PROFILE = 'profile/SET_PROFILE';
const SET_STATUS = 'profile/SET_STATUS';
const DELETE_POST = 'profile/DELETE_POST';
const SET_PHOTO_SUCCESS = 'profile/SET_PHOTO_SUCCESS';
const SET_PROFILE_INFO_SUCCESS = 'profile/SET_PROFILE_INFO_SUCCESS'
const TOGGLE_INFO_IS_FETCHING = 'profile/TOGGLE_INFO_IS_FETCHING';

let initialState = {
   postData: [
      { id: 0, authorID: 228, likes: 0, text: 'Федук гавно' },
      { id: 1, authorID: 228, likes: 226, text: 'Идем с братвой раздавать федуку по ебалу' },
      { id: 2, authorID: 228, likes: 1653, text: 'Нам Элджей сдал его адрес и попросил сказать, что его ждет назад тыкать в зад тыкать в зад' },
      { id: 3, authorID: 228, likes: 1498, text: 'Мой дисс гавно с не самыми красивыми рифмами' },
   ],
   profile: null,
   status: '',
   isFetching: false,
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
      case SET_PROFILE_INFO_SUCCESS: {
         return {
            ...state,
            profile: {
               ...state.profile,
               ...action.info
            }
         }
      };
      case TOGGLE_INFO_IS_FETCHING: {
         return { ...state, isFetching: action.isFetching }
      }

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

export const setProfileInfoSuccess = (info) => ({ type: SET_PROFILE_INFO_SUCCESS, info });

export const toggleInfoIsFetching = (isFetching) => ({ type: TOGGLE_INFO_IS_FETCHING, isFetching });

// THUNKS
export const getProfile = (id) => async (dispatch) => {
   dispatch(toggleInfoIsFetching(true))
   let data = await profileAPI.getProfile(id);
   dispatch(setProfile(data));
   dispatch(toggleInfoIsFetching(false))
};

export const getStatus = (id) => async (dispatch) => {
   let data = await profileAPI.getStatus(id);
   dispatch(setStatus(data));
};

export const updateStatus = (status) => async (dispatch) => {
   try {
      let data = await profileAPI.updateStatus(status);
      if (data.resultCode === 0) dispatch(setStatus(status));
   } catch (error) {
      console.log('ты дурачок?');
   }
};

export const savePhoto = (photo) => async (dispatch) => {
   let data = await profileAPI.savePhoto(photo);
   if (data.resultCode === 0) dispatch(setPhotoSuccess(data.data.photos));
};

export const saveInfo = (info) => async (dispatch) => {
   let data = await profileAPI.saveInfo(info);
   if (data.resultCode === 0) {
      dispatch(setProfileInfoSuccess(info));
   } else {
      let message = data.messages.length > 0 ? data.messages[0] : '';
      dispatch(stopSubmit('profileInfo', { _error: message }));
      return Promise.reject(data.messages[0]);


      // РАСПАРСИТЬ СТРОКУ С ОШИБКОЙ ДЛЯ КАЖДОГО ПОЛЯЯЯЯЯ

      // dispatch(stopSubmit('profileInfo', { 'facebook': data.messages[0] }));

   }
};

export default profile_reducer;