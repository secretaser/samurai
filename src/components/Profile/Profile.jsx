import MyPostsContainer from './MyPosts/MyPostsContainer';
import Profile__Info from './Profile__Info/Profile__Info';

const Profile = (props) => {

   return (
      <div>
         <Profile__Info info={props.store.getState().me} />
         <MyPostsContainer store={props.store} />
      </div >
   )
}

export default Profile;