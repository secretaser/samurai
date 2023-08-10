import { connect } from "react-redux";
import { follow, setPage, setUsers, unfollow, setTotalUsersCount, toggleIsFetching } from "../../redux/users_reducer";
import Users from './Users';
import axios from 'axios';
import React from 'react';
import Preloader from '../common/Preloader/Preloader';

class UsersContainer extends React.Component {

   onPageChange = (pageNumber) => {
      this.props.toggleIsFetching(true);
      this.props.setPage(pageNumber);
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
         this.props.setUsers(response.data.items);
         this.props.toggleIsFetching(false);
      });
   }

   componentDidMount() {
      this.props.toggleIsFetching(true);
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
         this.props.setUsers(response.data.items);
         this.props.setTotalUsersCount(response.data.totalCount);
         this.props.toggleIsFetching(false);
      });
   };
   render() {
      return <>
         {this.props.isFetching ? <Preloader /> : null}
         <Users
            currentPage={this.props.currentPage}
            totalUsersCount={this.props.totalUsersCount}
            onPageChange={this.onPageChange}
            pageSize={this.props.pageSize}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            isFetching={this.props.isFetching} />
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
   }
};

// let mapDispatchToProps = (dispatch) => {
//    return {
//       setUsers: (users) => {
//          dispatch(setUsersAC(users));
//       },
//       follow: (userId) => {
//          dispatch(followAC(userId));
//       },
//       unfollow: (userId) => {
//          dispatch(unfollowAC(userId));
//       },
//       setPage: (pageNumber) => {
//          dispatch(setPageAC(pageNumber));
//       },
//       setTotalUsersCount: (totalUsersCount) => {
//          dispatch(setTotalUsersCountAC(totalUsersCount));
//       },
//       toggleIsFetching: (isFetching) => {
//          dispatch(toggleIsFetchingAC(isFetching))
//       }
//    }
// };

export default connect(mapStateToProps,
   {
      setUsers,
      follow,
      unfollow,
      setPage,
      setTotalUsersCount,
      toggleIsFetching,
   })(UsersContainer);