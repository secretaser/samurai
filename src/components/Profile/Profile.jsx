<<<<<<< HEAD
import MyPostsContainer from './MyPosts/MyPostsContainer';
=======
import MyPosts_container from './MyPosts/MyPosts_container';
>>>>>>> 5c0e6869ff15682da91c38fa3111f9977f394917
import Profile__Info from './Profile__Info/Profile__Info';

const Profile = (props) => {
   return (
      <div>
<<<<<<< HEAD
         <Profile__Info profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
         <MyPostsContainer />
=======
         <Profile__Info info={props.store.getState().me} />
         <MyPosts_container store={props.store} />

>>>>>>> 5c0e6869ff15682da91c38fa3111f9977f394917
      </div >
   )
}

export default Profile;