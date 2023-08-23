import { connect } from "react-redux";
import { unfollow, follow, requestUsers, onPageChange } from "../../redux/users_reducer";
import Users from './Users';
import React from 'react';
import Preloader from '../common/Preloader/Preloader';
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { getUsers, getTotalUsersCount, getPageSize, getCurrentPage, getIsFetching, getFollowingInProgress } from "../../redux/users_selectors";

class UsersContainer extends React.Component {

   componentDidMount() {
      this.props.requestUsers(this.props.pageNumber, this.props.pageSize);
   };

   onPageChange = (pageNumber) => {
      this.props.onPageChange(pageNumber)
   }

   onFollow = (id) => {
      this.props.follow(id);
   };

   onUnfollow = (id) => {
      this.props.unfollow(id);
   };

   render() {
      // console.log('render');
      return <>
         {this.props.isFetching ? <Preloader /> : null}
         <Users
            currentPage={this.props.currentPage}
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            users={this.props.users}
            isFetching={this.props.isFetching}
            followingInProgress={this.props.followingInProgress}
            onPageChange={this.onPageChange}
            follow={this.onFollow}
            unfollow={this.onUnfollow}
            isAuth={this.props.isAuth} />
      </>
   }
};

let mapStateToProps = (state) => {
   // console.log('mstp');
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
   connect(mapStateToProps,
      {
         follow,
         unfollow,
         requestUsers,
         onPageChange,
      }))(UsersContainer);