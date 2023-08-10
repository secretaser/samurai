const SET_USERS = 'SET_USERS';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_PAGE = 'SET_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
   users: [
   ],
   pageSize: 5,
   totalUsersCount: 5,
   currentPage: 1,
   isFetching: false,
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
      case SET_PAGE: {
         return {
            ...state, currentPage: action.pageNumber
         }
      };
      case SET_TOTAL_USERS_COUNT: {
         return {
            ...state, totalUsersCount: action.count,
         }
      };
      case TOGGLE_IS_FETCHING: {
         return {
            ...state, isFetching: action.isFetching,
         }
      };

      default:
         return state;
   }
};

export const setUsers = (users) => ({ type: SET_USERS, users: users });
export const follow = (userId) => ({ type: FOLLOW, userId: userId });
export const unfollow = (userId) => ({ type: UNFOLLOW, userId: userId });
export const setPage = (pageNumber) => ({ type: SET_PAGE, pageNumber: pageNumber });
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching: isFetching });

export default users_reducer;