import { connect } from 'react-redux';
import Profile__Info from './Profile__Info';

let mapStateToProps = (state) => {
   return {
      info: state.me,
      profile: state.profilePage.profile
   }
};

let mapDispatchToProps = (dispatch) => {
   return {}
}

const Profile_Info_Container = connect(mapStateToProps, mapDispatchToProps)(Profile__Info)

export default Profile_Info_Container;