import { usersAPI } from "../api/api";
import { updateObjectInArray } from "../utils/object-helpers";
import defPicSmall from '../assets/images/ProfileDefPicSmall.jfif'

const SET_USERS = 'users/SET_USERS';
const FOLLOW = 'users/FOLLOW';
const UNFOLLOW = 'users/UNFOLLOW';
const SET_PAGE = 'users/SET_PAGE';
const SET_TOTAL_USERS_COUNT = 'users/SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOWING_IN_PROGRESS = 'users/TOGGLE_FOLLOWING_IN_PROGRESS';

let initialState = {
   defPicSmall: defPicSmall,
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
            users: updateObjectInArray(state.users, action.userId, 'id', { followed: true })
         };
      };

      case UNFOLLOW: {
         return {
            ...state,
            users: updateObjectInArray(state.users, action.userId, 'id', { followed: false })
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
   return async (dispatch) => {
      dispatch(toggleIsFetching(true))
      let data = await usersAPI.getUsers(pageNumber, pageSize)
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
      dispatch(toggleIsFetching(false));
   };
};

export const onPageChange = (pageNumber, pageSize = 5) => {
   return async (dispatch) => {
      dispatch(toggleIsFetching(true));
      dispatch(setPage(pageNumber));

      let data = await usersAPI.getUsers(pageNumber, pageSize);
      dispatch(setUsers(data.items));
      dispatch(toggleIsFetching(false));
   };
};

const followUnfollowFlow = async (dispatch, id, apiMethod, actionCreator) => {
   dispatch(toggleFollowingInProgress(true, id));
   let data = await apiMethod(id);
   if (data.resultCode == 0) dispatch(actionCreator(id));
   dispatch(toggleFollowingInProgress(false, id));
}

export const follow = (id) => {
   return async (dispatch) => {
      followUnfollowFlow(dispatch, id, usersAPI.follow, followSuccess)
   }
};

export const unfollow = (id) => {
   return async (dispatch) => {
      followUnfollowFlow(dispatch, id, usersAPI.unfollow, unfollowSuccess)
   }
};

export default users_reducer;