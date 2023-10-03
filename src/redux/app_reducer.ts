import { getAuthData } from "./auth_reducer.ts";


let INIT_SUCCESS: 'app/INIT_SUCCESS' = 'app/INIT_SUCCESS';

type initSuccessActionType = {
   type: typeof INIT_SUCCESS
}

let initialState = {
   initialized: false as boolean,
}
export type initialStateType = typeof initialState;

const app_reducer = (state = initialState, action: any): initialStateType => {
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

export const initSuccess = (): initSuccessActionType => ({
   type: INIT_SUCCESS,
});

export const initializeApp = () => (dispatch: any) => {
   let promise = dispatch(getAuthData());
   Promise.all([promise])
      .then(() => {
         dispatch(initSuccess());
      })
};

export default app_reducer;