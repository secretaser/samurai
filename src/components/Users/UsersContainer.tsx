import { connect } from "react-redux";
import { unfollow, follow, requestUsers, onPageChange } from "../../redux/users_reducer.ts";
import Users from './Users.tsx';
import React from 'react';
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect.js";
import { getTotalUsersCount, getPageSize, getCurrentPage, getIsFetching, getFollowingInProgress, getUsers } from "../../redux/users_selectors.ts";
import UsersLoading from "./UsersLoading.jsx";
import { userType } from "../../types/types.ts";
import { appStateType } from "../../redux/redux_store.ts";


type mapDispatchPropsType = {
   follow: (userId: number) => void
   unfollow: (userId: number) => void
   requestUsers: (currentPage: number, pageSize: number) => void
   onPageChange: (pageNumber: number) => void
}
type mapStatePropsType = {
   users: Array<userType>
   pageSize: number
   totalUsersCount: number
   currentPage: number
   isFetching: boolean
   followingInProgress: Array<number>
   isAuth: boolean
}
type ownPropsType = {
}

type propsType = mapDispatchPropsType & mapStatePropsType & ownPropsType

class UsersContainer extends React.Component<propsType> {

   componentDidMount() {
      let { currentPage, pageSize } = this.props;
      this.props.requestUsers(currentPage, pageSize);
   };

   render() {
      return <>
         {this.props.isFetching ? <UsersLoading
            currentPage={this.props.currentPage}
            onPageChange={this.props.onPageChange}
            pageSize={this.props.pageSize}
            totalUsersCount={this.props.totalUsersCount} />
            :
            <Users
               currentPage={this.props.currentPage}
               totalUsersCount={this.props.totalUsersCount}
               pageSize={this.props.pageSize}
               users={this.props.users}
               isFetching={this.props.isFetching}
               followingInProgress={this.props.followingInProgress}
               onPageChange={this.props.onPageChange}
               follow={this.props.follow}
               unfollow={this.props.unfollow}
               isAuth={this.props.isAuth} />}

      </>
   }
};

let mapStateToProps = (state: appStateType): mapStatePropsType => {
   return {
      users: getUsers(state),
      pageSize: getPageSize(state),
      totalUsersCount: getTotalUsersCount(state),
      currentPage: getCurrentPage(state),
      isFetching: getIsFetching(state),
      followingInProgress: getFollowingInProgress(state),
      isAuth: state.auth.isAuth,
   }
};

export default compose(
   withAuthRedirect,
   connect<mapStatePropsType, mapDispatchPropsType, ownPropsType, appStateType>(
      mapStateToProps, { follow, unfollow, requestUsers, onPageChange }))(UsersContainer);