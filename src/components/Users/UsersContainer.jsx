import { connect } from "react-redux";
import { unfollow, follow, requestUsers, onPageChange } from "../../redux/users_reducer.ts";
import Users from './Users.tsx';
import React from 'react';
import Preloader from '../common/Preloader/Preloader';
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { getTotalUsersCount, getPageSize, getCurrentPage, getIsFetching, getFollowingInProgress, getUsers } from "../../redux/users_selectors";
import UsersLoading from "./UsersLoading";
import ProfileDefPicSmall from '../../assets/images/ProfileDefPicSmall.jfif';

class UsersContainer extends React.Component {

   componentDidMount() {
      let { currentPage, pageSize } = this.props;
      this.props.requestUsers(currentPage, pageSize);
   };

   render() {
      return <>
         {/* <UsersLoading
            currentPage={this.props.currentPage}
            onPageChange={this.props.onPageChange}
            pageSize={this.props.pageSize}
            totalUsersCount={this.props.totalUsersCount} /> */}

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
               isAuth={this.props.isAuth}
               ProfileDefPicSmall={this.props.ProfileDefPicSmall} />}

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
      ProfileDefPicSmall: state.usersPage.defPicSmall,
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