import { usersAPI } from "../api/api";

const SET_USERS = 'SET_USERS';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_PAGE = 'SET_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE_FOLLOWING_IN_PROGRESS';
const FAKE = 'FAKE';

let initialState = {
   users: [
   ],
   pageSize: 5,
   totalUsersCount: 5,
   currentPage: 1,
   isFetching: false,
   followingInProgress: [],
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
      case TOGGLE_FOLLOWING_IN_PROGRESS: {
         return {
            ...state,
            followingInProgress: action.followingInProgress ?
               [...state.followingInProgress, action.userId] :
               state.followingInProgress.filter(id => id != action.userId),
         }
      };

      default:
         return state;
   }
};

export const setUsers = (users) => ({ type: SET_USERS, users: users });
export const followSuccess = (userId) => ({ type: FOLLOW, userId: userId });
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId: userId });
export const setPage = (pageNumber) => ({ type: SET_PAGE, pageNumber: pageNumber });
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching: isFetching });
export const toggleFollowingInProgress = (followingInProgress, userId) => ({ type: TOGGLE_FOLLOWING_IN_PROGRESS, followingInProgress: followingInProgress, userId: userId });



export const requestUsers = (pageNumber, pageSize) => {
   return (dispatch) => {
      dispatch(toggleIsFetching(true))
      usersAPI.getUsers(pageNumber, pageSize).then(data => {
         dispatch(setUsers(data.items));
         dispatch(setTotalUsersCount(data.totalCount));
         dispatch(toggleIsFetching(false));
      });
   }
};

export const onPageChange = (pageNumber, pageSize = 5) => {
   return (dispatch) => {
      dispatch(toggleIsFetching(true));
      dispatch(setPage(pageNumber));
      usersAPI.getUsers(pageNumber, pageSize).then(data => {
         dispatch(setUsers(data.items));
         dispatch(toggleIsFetching(false));
      });
   }
};

export const follow = (id) => {
   return (dispatch) => {
      dispatch(toggleFollowingInProgress(true, id));
      usersAPI.follow(id).then(data => {
         if (data.resultCode == 0) {
            dispatch(followSuccess(id));
         }
         dispatch(toggleFollowingInProgress(false, id));
      })
   }
};

export const unfollow = (id) => {
   return (dispatch) => {
      dispatch(toggleFollowingInProgress(true, id));
      usersAPI.unfollow(id).then(data => {
         if (data.resultCode == 0) {
            dispatch(unfollowSuccess(id));
         }
         dispatch(toggleFollowingInProgress(false, id));
      })
   }
};

export default users_reducer;