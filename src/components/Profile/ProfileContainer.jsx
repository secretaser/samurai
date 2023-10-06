import React from 'react';
import { connect } from 'react-redux';
import { getProfile, getStatus, saveInfo, savePhoto, setPhotoSuccess, setProfile, setProfileInfoSuccess, updateStatus } from '../../redux/profile_reducer.ts';
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import Profile from './Profile';
import style from './MyPosts/css/MyPosts.module.css'

class ProfileContainer extends React.Component {

   refreshProfile() {
      let userId = this.props.router.params.userId;
      if (!userId) userId = this.props.authorizedUserId;
      // debugger;
      this.props.getProfile(userId);
      this.props.getStatus(userId);
   }

   componentDidMount() {
      this.refreshProfile();
   }

   componentDidUpdate(prevProps, prevState) {
      if (this.props.router.location.pathname !== prevProps.router.location.pathname) {
         this.refreshProfile();
      }
   }

   render() {
      return (
         <Profile {...this.props}
            profile={this.props.profile}
            isOwner={!this.props.router.params.userId || this.props.router.params.userId == this.props.authorizedUserId}
            savePhoto={this.props.savePhoto}
            setProfileInfoSuccess={this.props.setProfileInfoSuccess}
            saveInfo={this.props.saveInfo}
            isFetching={this.props.isFetching}
         />
      )
   }
};

let mapStateToProps = (state) => {
   return {
      profile: state.profilePage.profile,
      status: state.profilePage.status,
      authorizedUserId: state.auth.userId,
      isAuth: state.auth.isAuth,
      isFetching: state.profilePage.isFetching,
   }
}

function withRouter(Component) {
   function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
         <Component
            {...props}
            router={{ location, navigate, params }}
         />
      );
   }
   return ComponentWithRouterProp;
}

export default compose(
   connect(mapStateToProps, { getProfile, updateStatus, getStatus, setProfile, setPhotoSuccess, savePhoto, setProfileInfoSuccess, saveInfo }),
   withAuthRedirect,
   withRouter,
)(ProfileContainer)