const SET_USERS = 'SET_USERS';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

let initialState = {
   users: [
   ]
}

const users_reducer = (state = initialState, action) => {

   switch (action.type) {

      case SET_USERS: {
         return { ...state, users: [...action.users] }
      }

      case FOLLOW: {
         return {
            ...state,
            users: state.users.map(u => {
               if (u.id === action.userId) {
                  return { ...u, followed: true }
               }
               return u;
            })
         };
      };

      case UNFOLLOW: {
         return {
            ...state,
            users: state.users.map(u => {
               if (u.id === action.userId) {
                  return { ...u, followed: false }
               }
               return u;
            })
         };
      };

      default:
         return state;
   }
};

export const setUsersAC = (users) => ({ type: SET_USERS, users: users });

export const followAC = (userId) => ({ type: FOLLOW, userId: userId });

export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId: userId });

export default users_reducer;