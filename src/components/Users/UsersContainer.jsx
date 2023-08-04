import { connect } from "react-redux";
import Users from "./Users";
import { followAC, setUsersAC, unfollowAC } from "../../redux/users_reducer";

let mapStateToProps = (state) => {
   return {
      users: state.usersPage.users
   }
}

let mapDispatchToProps = (dispatch) => {
   return {
      setUsers: (users) => {
         dispatch(setUsersAC(users));
      },
      follow: (userId) => {
         dispatch(followAC(userId));
      },
      unfollow: (userId) => {
         dispatch(unfollowAC(userId));
      }
   }
}
export default connect(mapStateToProps, mapDispatchToProps)(Users);