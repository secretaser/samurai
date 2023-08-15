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
            ...action.data,
            isAuth: true,
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

export const setAuthUserData = (userId, email, login) => ({ type: SET_AUTH_USER_DATA, data: { userId, email, login, } });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching: isFetching });

export const getAuthData = () => {
   return (dispatch) => {
      dispatch(toggleIsFetching(true));
      authAPI.checkAuth().then(data => {
         if (data.resultCode === 0) {
            let { id, email, login, } = data.data;
            dispatch(setAuthUserData(id, email, login,));
         }
      });
      dispatch(toggleIsFetching(false));
   }
}


export default auth_reducer;