import { connect } from "react-redux";
import { unfollow, follow, getUsers, onPageChange } from "../../redux/users_reducer";
import Users from './Users';
import React from 'react';
import Preloader from '../common/Preloader/Preloader';

class UsersContainer extends React.Component {

   componentDidMount() {
      this.props.getUsers(this.props.pageNumber, this.props.pageSize);
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
            isAuth={this.isAuth} />
      </>
   }
};

let mapStateToProps = (state) => {
   return {
      users: state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      totalUsersCount: state.usersPage.totalUsersCount,
      currentPage: state.usersPage.currentPage,
      isFetching: state.usersPage.isFetching,
      followingInProgress: state.usersPage.followingInProgress,
      isAuth: state.auth.isAuth,
   }
};

export default connect(mapStateToProps,
   {
      follow,
      unfollow,
      getUsers,
      onPageChange,
   })(UsersContainer);