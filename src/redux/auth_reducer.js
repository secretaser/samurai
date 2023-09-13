import { stopSubmit } from "redux-form";
import { authAPI, securityAPI } from "../api/api";

const SET_AUTH_USER_DATA = 'auth/SET_AUTH_USER_DATA';
const TOGGLE_IS_FETCHING = 'auth/TOGGLE_IS_FETCHING';
const GET_CAPTHA_URL_SUCCESS = 'auth/GET_CAPTHA_URL_SUCCESS';
const ava = 'https://img-9gag-fun.9cache.com/photo/avoDN2Z_460s.jpg'

let initialState = {
   userId: null,
   email: null,
   login: null,
   isFetching: false,
   isAuth: false,
   ava: ava,
   captchaUrl: null
}

const auth_reducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_AUTH_USER_DATA:
      case GET_CAPTHA_URL_SUCCESS: {
         console.log(action.payload);
         return {
            ...state,
            ...action.payload,
         }
      }

      case TOGGLE_IS_FETCHING: {
         return {
            ...state, isFetching: action.isFetching,
         }
      };

      default:
         return state;
   }
};

export const setAuthUserData = (userId, email, login, isAuth, captcha) => ({
   type: SET_AUTH_USER_DATA,
   payload: { userId, email, login, isAuth, captcha }
});


export const getCaptchaUrlSuccess = (captchaUrl) => ({
   type: SET_AUTH_USER_DATA,
   payload: { captchaUrl }
});

export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching: isFetching });

export const getCapthaUrl = () => async (dispatch) => {
   const url = await securityAPI.getCaptcha();
   dispatch(getCaptchaUrlSuccess(url))
};

export const getAuthData = () => async (dispatch) => {
   dispatch(toggleIsFetching(true));
   let data = await authAPI.checkAuth();
   if (data.resultCode === 0) {
      let { id, email, login, } = data.data;
      dispatch(setAuthUserData(id, email, login, true));
   }
   dispatch(toggleIsFetching(false));
};

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
   let response = await authAPI.login(email, password, rememberMe, captcha);
   console.log(response);
   if (response.data.resultCode === 0) {
      dispatch(getAuthData())
   } else {
      if (response.data.resultCode === 10) dispatch(getCapthaUrl());
      let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
      dispatch(stopSubmit('login', { _error: message }));
   }
};


export const logout = () => async (dispatch) => {
   let response = await authAPI.logout();
   if (response.data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false))
   }
};

export default auth_reducer;