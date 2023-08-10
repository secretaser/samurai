import React from "react";
import Header from "./Header";
import axios from "axios";
import { connect } from "react-redux";
import { setAuthUserData, toggleIsFetching } from "../../redux/auth_reducer";

class HeaderContainer extends React.Component {

   componentDidMount() {
      this.props.toggleIsFetching(true);
      axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, { withCredentials: true })
         .then(response => {
            // debugger;
            if (response.data.resultCode === 0) {
               let { id, email, login, } = response.data.data;
               this.props.setAuthUserData(id, email, login,)
            }
         });
      this.props.toggleIsFetching(false);
   }

   render() {
      return <Header {...this.props} />
   }
};

const mapStateToProps = (state) => ({
   isAuth: state.auth.isAuth,
   login: state.auth.login,
   ava: state.auth.ava,
});

export default connect(mapStateToProps, { setAuthUserData, toggleIsFetching })(HeaderContainer);