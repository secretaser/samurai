import MyPostsContainer from './MyPosts/MyPostsContainer';
import Profile_Info_Container from './Profile__Info/Profile_Info_Container';

const Profile = (props) => {
   // debugger;
   return (
      <div>
         <Profile_Info_Container />
         {/* <Profile__Info info={props.store.getState().me} /> */}
         <MyPostsContainer />

         {/* <MyPostsContainer store={props.store} /> */}
      </div >
   )
}

export default Profile;