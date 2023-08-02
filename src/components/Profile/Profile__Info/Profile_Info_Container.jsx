import { connect } from 'react-redux';
import Profile__Info from './Profile__Info';

let mapStateToProps = (state) => {
   return {
      info: state.me,
   }
};

let mapDispatchToProps = (dispatch) => {
   return {}
}

const Profile_Info_Container = connect(mapStateToProps, mapDispatchToProps)(Profile__Info)

export default Profile_Info_Container;


// const Profile_Info_ContainerOld = (props) => {
//    return (
//       <StoreContext.Consumer>
//          {
//             (store) => {
//                let state = store.getState();
//                return (
//                   <Profile__Info info={state.me} />
//                )
//             }
//          }
//       </StoreContext.Consumer>
//    )
// }

// export default MyPostsContainer;