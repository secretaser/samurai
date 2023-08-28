import { connect } from "react-redux";
import { unfollow, follow, requestUsers, onPageChange } from "../../redux/users_reducer";
import Users from './Users';
import React from 'react';
import Preloader from '../common/Preloader/Preloader';
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { getTotalUsersCount, getPageSize, getCurrentPage, getIsFetching, getFollowingInProgress, getUsers } from "../../redux/users_selectors";

class UsersContainer extends React.Component {

   componentDidMount() {
      let { pageNumber, pageSize } = this.props;
      this.props.requestUsers(pageNumber, pageSize);
   };

   render() {
      return <>
         {this.props.isFetching ? <Preloader /> : null}
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
            isAuth={this.props.isAuth} />
      </>
   }
};

let mapStateToProps = (state) => {
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