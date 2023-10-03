import { reset, stopSubmit } from "redux-form";
import { profileAPI } from "../api/api";
import { photosType, postType, profileType } from "../types/types";

const ADD_POST = 'profile/ADD-POST';
const SET_PROFILE = 'profile/SET_PROFILE';
const SET_STATUS = 'profile/SET_STATUS';
const DELETE_POST = 'profile/DELETE_POST';
const SET_PHOTO_SUCCESS = 'profile/SET_PHOTO_SUCCESS';
const SET_PROFILE_INFO_SUCCESS = 'profile/SET_PROFILE_INFO_SUCCESS'
const TOGGLE_INFO_IS_FETCHING = 'profile/TOGGLE_INFO_IS_FETCHING';

let initialState = {
   postData: [
      { id: 0, authorID: 2, likes: 0, text: 'Всем привет! Это пост на стене, записанный прямо в стейт!' },
      { id: 1, authorID: 2, likes: 226, text: 'Слушайте мои песни в ВК Музыке' },
      { id: 2, authorID: 2, likes: 1653, text: 'Нет ничего лучше записей на стене, на которые пока нельзя поставить настоящий лайк' },
      { id: 3, authorID: 2, likes: 1412, text: 'Но когда-нибудь это обязательно изменится!' },
   ] as Array<postType>,
   profile: null as profileType | null,
   status: '',
   isFetching: false,
   newPostText: '',
}
type initialStateType = typeof initialState

const profile_reducer = (state = initialState, action: any): initialStateType => {
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
         return { ...state, profile: { ...state.profile, photos: action.photos } as profileType }
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

// ACTION CREATORS TYPES
type addPostType = {
   type: typeof ADD_POST,
   postBody: string
}
type deletePostType = {
   type: typeof DELETE_POST,
   postId: number
}
type setProfileType = {
   type: typeof SET_PROFILE,
   profile: profileType
}
type setStatusType = {
   type: typeof SET_STATUS,
   status: string
}
type setPhotoSuccessType = {
   type: typeof SET_PHOTO_SUCCESS,
   photos: photosType
}
type setProfileInfoSuccessType = {
   type: typeof SET_PROFILE_INFO_SUCCESS,
   info: profileType
}
type toggleInfoIsFetchingType = {
   type: typeof TOGGLE_INFO_IS_FETCHING,
   isFetching: boolean
}
// ACTION CREATORS
export const addPost = (postBody: string): addPostType => ({ type: ADD_POST, postBody });

export const deletePost = (postId: number): deletePostType => ({ type: DELETE_POST, postId });

export const setProfile = (profile: profileType): setProfileType => ({ type: SET_PROFILE, profile });

export const setStatus = (status: string): setStatusType => ({ type: SET_STATUS, status });

export const setPhotoSuccess = (photos: photosType): setPhotoSuccessType => ({ type: SET_PHOTO_SUCCESS, photos });

export const setProfileInfoSuccess = (info: profileType): setProfileInfoSuccessType => ({ type: SET_PROFILE_INFO_SUCCESS, info });

export const toggleInfoIsFetching = (isFetching: boolean): toggleInfoIsFetchingType => ({ type: TOGGLE_INFO_IS_FETCHING, isFetching });

// THUNKS
export const addPostThunk = (postBody: string) => (dispatch: any) => {
   dispatch(addPost(postBody));
   dispatch(reset('newPost'));
};

export const getProfile = (id: number) => async (dispatch: any) => {
   dispatch(toggleInfoIsFetching(true))
   let data = await profileAPI.getProfile(id);
   dispatch(setProfile(data));
   dispatch(toggleInfoIsFetching(false))
};

export const getStatus = (id: number) => async (dispatch: any) => {
   let data = await profileAPI.getStatus(id);
   dispatch(setStatus(data));
};

export const updateStatus = (status: string) => async (dispatch: any) => {
   try {
      let data = await profileAPI.updateStatus(status);
      if (data.resultCode === 0) dispatch(setStatus(status));
   } catch (error) {
      console.log('ты дурачок?');
   }
};

export const savePhoto = (photo: any) => async (dispatch: any) => {
   let data = await profileAPI.savePhoto(photo);
   if (data.resultCode === 0) dispatch(setPhotoSuccess(data.data.photos));
};

export const saveInfo = (info: profileType) => async (dispatch: any) => {
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