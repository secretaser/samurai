import MyPostsContainer from './MyPosts/MyPostsContainer';
import Profile_Info_Container from './Profile__Info/Profile_Info_Container';

const Profile = (props) => {
   return (
      <div>
         <Profile_Info_Container />
         <MyPostsContainer />
      </div >
   )
}

export default Profile;