import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { setAuthUserData, toggleIsFetching, getAuthData } from "../../redux/auth_reducer";

class HeaderContainer extends React.Component {

   componentDidMount() {
      this.props.getAuthData()
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

export default connect(mapStateToProps, { setAuthUserData, toggleIsFetching, getAuthData })(HeaderContainer);