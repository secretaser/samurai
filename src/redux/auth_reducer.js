import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const ava = 'https://img-9gag-fun.9cache.com/photo/avoDN2Z_460s.jpg'

let initialState = {
   userId: null,
   email: null,
   login: null,
   isFetching: false,
   isAuth: false,
   ava: ava,
}

const auth_reducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_AUTH_USER_DATA: {
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

export const setAuthUserData = (userId, email, login, isAuth) => ({
   type: SET_AUTH_USER_DATA,
   payload: { userId, email, login, isAuth }
});
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching: isFetching });

export const getAuthData = () => (dispatch) => {
   dispatch(toggleIsFetching(true));
   return authAPI.checkAuth().then(data => {
      if (data.resultCode === 0) {
         let { id, email, login, } = data.data;
         dispatch(setAuthUserData(id, email, login, true));
      }
      dispatch(toggleIsFetching(false));
   });
};

export const login = (email, password, rememberMe) => (dispatch) => {
   authAPI.login(email, password, rememberMe)
      .then(response => {
         if (response.data.resultCode === 0) {
            dispatch(getAuthData())
         } else {
            let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
            dispatch(stopSubmit('login', { _error: message }));
         }
      })
}

export const logout = () => (dispatch) => {
   authAPI.logout()
      .then(response => {
         if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
         }
      })
}

export default auth_reducer;