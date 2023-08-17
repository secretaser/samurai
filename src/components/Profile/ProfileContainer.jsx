import React from 'react';
import { connect } from 'react-redux';
import { getProfile, getStatus, setProfile, updateStatus } from '../../redux/profile_reducer';
import { useLocation, useMatch, useMatches, useNavigate, useParams } from "react-router-dom";
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import Profile from './Profile';

class ProfileContainer extends React.Component {

   componentDidMount() {
      let userId = this.props.router.params.userId;
      if (!userId) userId = 2;
      this.props.getProfile(userId);
      this.props.getStatus(userId);
   }

   componentDidUpdate(prevProps, prevState) {
      if (this.props.router.location.pathname !== prevProps.router.location.pathname) {
         let userId = this.props.router.params.userId
         this.props.getProfile(userId);
         this.props.getStatus(userId);
      }
   }

   render() {
      return (
         <Profile {...this.props} profile={this.props.profile} />
      )
   }
};

let mapStateToProps = (state) => ({
   profile: state.profilePage.profile,
   status: state.profilePage.status,
})

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
   connect(mapStateToProps, { getProfile, updateStatus, getStatus, setProfile }),
   // withAuthRedirect,
   withRouter,
)(ProfileContainer)