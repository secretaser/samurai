import { appStateType } from './redux_store';
import { usersAPI } from "../api/api";
import { updateObjectInArray } from "../utils/object-helpers";
// import defPicSmall from '../assets/images/profileicon.jpg'
import { photosType, userType } from "../types/types";
import { Dispatch } from "redux";

const SET_USERS = 'users/SET_USERS';
const FOLLOW = 'users/FOLLOW';
const UNFOLLOW = 'users/UNFOLLOW';
const SET_PAGE = 'users/SET_PAGE';
const SET_TOTAL_USERS_COUNT = 'users/SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOWING_IN_PROGRESS = 'users/TOGGLE_FOLLOWING_IN_PROGRESS';


let initialState = {
   // defPicSmall: defPicSmall as string | null,
   users: [] as Array<userType>,
   pageSize: 5,
   totalUsersCount: 5,
   currentPage: 1,
   isFetching: false,
   followingInProgress: [] as Array<number>,
}
type initialStateType = typeof initialState

const users_reducer = (state = initialState, action: actionTypes): initialStateType => {

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

type actionTypes = setUsersType | followSuccessType | unfollowSuccessType |
   setPageType | setTotalUsersCountType | toggleIsFetchingType | toggleFollowingInProgress


// ACTION CREATORS TYPES
type setUsersType = {
   type: typeof SET_USERS,
   users: Array<userType>
}
type followSuccessType = {
   type: typeof FOLLOW,
   userId: number
}
type unfollowSuccessType = {
   type: typeof UNFOLLOW,
   userId: number
}
type setPageType = {
   type: typeof SET_PAGE,
   pageNumber: number
}
type setTotalUsersCountType = {
   type: typeof SET_TOTAL_USERS_COUNT,
   count: number
}
type toggleIsFetchingType = {
   type: typeof TOGGLE_IS_FETCHING,
   isFetching: boolean
}
type toggleFollowingInProgress = {
   type: typeof TOGGLE_FOLLOWING_IN_PROGRESS,
   followingInProgress: boolean,
   userId: number
}

// ACTION CREATORS
export const setUsers = (users: Array<userType>): setUsersType => ({ type: SET_USERS, users })
export const followSuccess = (userId: number): followSuccessType => ({ type: FOLLOW, userId })
export const unfollowSuccess = (userId: number): unfollowSuccessType => ({ type: UNFOLLOW, userId })
export const setPage = (pageNumber: number): setPageType => ({ type: SET_PAGE, pageNumber })
export const setTotalUsersCount = (count: number): setTotalUsersCountType => ({ type: SET_TOTAL_USERS_COUNT, count })
export const toggleIsFetching = (isFetching: boolean): toggleIsFetchingType => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const toggleFollowingInProgress = (followingInProgress: boolean, userId: number): toggleFollowingInProgress => ({ type: TOGGLE_FOLLOWING_IN_PROGRESS, followingInProgress, userId })

// THUNKS

type getStateType = () => appStateType
type currentDispatchType = Dispatch<actionTypes>

export const requestUsers = (pageNumber: number, pageSize: number) => {
   return async (dispatch, getState) => {
      dispatch(toggleIsFetching(true))
      let data = await usersAPI.getUsers(pageNumber, pageSize)
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
      dispatch(toggleIsFetching(false));
   };
};

export const onPageChange = (pageNumber: number, pageSize: number = 5) => {
   return async (dispatch: Dispatch<actionTypes>) => {
      dispatch(toggleIsFetching(true));
      dispatch(setPage(pageNumber));

      let data = await usersAPI.getUsers(pageNumber, pageSize);
      dispatch(setUsers(data.items));
      dispatch(toggleIsFetching(false));
   };
};

const followUnfollowFlow = async (dispatch: Dispatch<actionTypes>, id: number, apiMethod: any, actionCreator: any) => {
   dispatch(toggleFollowingInProgress(true, id));
   let data = await apiMethod(id);
   if (data.resultCode == 0) dispatch(actionCreator(id));
   dispatch(toggleFollowingInProgress(false, id));
}

export const follow = (id: number) => {
   return async (dispatch: Dispatch<actionTypes>) => {
      followUnfollowFlow(dispatch, id, usersAPI.follow, followSuccess)
   }
};

export const unfollow = (id: number) => {
   return async (dispatch: Dispatch<actionTypes>) => {
      followUnfollowFlow(dispatch, id, usersAPI.unfollow, unfollowSuccess)
   }
};

export default users_reducer;