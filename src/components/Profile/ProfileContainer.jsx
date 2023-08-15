import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getProfile } from '../../redux/profile_reducer';
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

class ProfileContainer extends React.Component {

   componentDidMount() {
      let userId = this.props.router.params.userId;
      if (!userId) userId = 2;
      this.props.getProfile(userId);
   }

   render() {
      return (
         <Profile {...this.props} profile={this.props.profile} />
      )
   }
};

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToProps = (state) => ({
   profile: state.profilePage.profile,
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

// export default connect(mapStateToProps, { getProfile })(withRouter(ProfileContainer));
export default connect(mapStateToProps, { getProfile })(withRouter(AuthRedirectComponent));