import { connect } from 'react-redux';
import Profile__Info from './Profile__Info';
import { compose } from 'redux';
import { getStatus, updateStatus } from '../../../redux/profile_reducer';

let mapStateToProps = (state) => {
   return {
      info: state.me,
      profile: state.profilePage.profile,
      status: state.profilePage.status
   }
};

const Profile_Info_Container = compose(
   connect(mapStateToProps, { updateStatus }),)
   (Profile__Info)

export default Profile_Info_Container;