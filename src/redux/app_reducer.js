import { getAuthData } from "./auth_reducer";


const INIT_SUCCESS = 'INIT_SUCCESS';

let initialState = {
   initialized: false
}

const app_reducer = (state = initialState, action) => {
   switch (action.type) {
      case INIT_SUCCESS: {
         return {
            ...state,
            initialized: true,
         }
      };

      default:
         return state;
   }
};

export const initSuccess = () => ({
   type: INIT_SUCCESS,
});

export const initializeApp = () => (dispatch) => {
   let promise = dispatch(getAuthData());
   promise.then(() => {
      dispatch(initSuccess());
   })
};

export default app_reducer;