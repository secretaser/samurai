import { stopSubmit } from "redux-form";
import { authAPI, securityAPI } from "../api/api";

let SET_AUTH_USER_DATA: 'auth/SET_AUTH_USER_DATA' = 'auth/SET_AUTH_USER_DATA';
let TOGGLE_IS_FETCHING: 'auth/TOGGLE_IS_FETCHING' = 'auth/TOGGLE_IS_FETCHING';
let GET_CAPTHA_URL_SUCCESS: 'auth/GET_CAPTHA_URL_SUCCESS' = 'auth/GET_CAPTHA_URL_SUCCESS';
let ava = 'https://img-9gag-fun.9cache.com/photo/avoDN2Z_460s.jpg'

let initialState = {
   userId: null as number | null,
   email: null as string | null,
   login: null as string | null,
   isFetching: false as boolean,
   isAuth: false as boolean,
   ava: ava as string | null,
   captchaUrl: null as string | null
}
export type initialStateType = {
   userId: number | null,
   email: string | null,
   login: string | null,
   isFetching: boolean,
   isAuth: boolean,
   ava: string | null,
   captchaUrl: string | null
}

const auth_reducer = (state = initialState, action: any): initialStateType => {
   switch (action.type) {
      case SET_AUTH_USER_DATA:
      case GET_CAPTHA_URL_SUCCESS: {
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

type setAuthUserDataPayload = {
   userId: number | null,
   email: string | null,
   login: string | null,
   isAuth: boolean | null
}
type setAuthUserDataActionType = {
   type: typeof SET_AUTH_USER_DATA
   payload: setAuthUserDataPayload
}
export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean | null): setAuthUserDataActionType => ({
   type: SET_AUTH_USER_DATA,
   payload: { userId, email, login, isAuth }
});

type getCaptchaUrlSuccessActionType = {
   type: typeof SET_AUTH_USER_DATA,
   payload: { captchaUrl: string }
}
export const getCaptchaUrlSuccess = (captchaUrl: string): getCaptchaUrlSuccessActionType => ({
   type: SET_AUTH_USER_DATA,
   payload: { captchaUrl }
});

type toggleIsFetchingActionType = {
   type: typeof TOGGLE_IS_FETCHING
   isFetching: boolean
}
export const toggleIsFetching = (isFetching: boolean): toggleIsFetchingActionType => ({ type: TOGGLE_IS_FETCHING, isFetching: isFetching });

export const getCapthaUrl = () => async (dispatch: any) => {
   const url = await securityAPI.getCaptcha();
   dispatch(getCaptchaUrlSuccess(url))
};

export const getAuthData = () => async (dispatch: any) => {
   dispatch(toggleIsFetching(true));
   let data = await authAPI.checkAuth();
   if (data.resultCode === 0) {
      let { id, email, login, } = data.data;
      dispatch(setAuthUserData(id, email, login, true));
   }
   dispatch(toggleIsFetching(false));
};

export const login = (email: string, password: string, rememberMe: boolean, captcha?: string) => async (dispatch: any) => {
   let response = await authAPI.login(email, password, rememberMe, captcha);
   if (response.data.resultCode === 0) {
      console.log('login response');
      console.log(response.data);

      dispatch(getAuthData())
   } else {
      if (response.data.resultCode === 10) dispatch(getCapthaUrl());
      let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
      dispatch(stopSubmit('login', { _error: message }));
   }
};


export const logout = () => async (dispatch: any) => {
   let response = await authAPI.logout();
   if (response.data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false))
   }
};

export default auth_reducer;