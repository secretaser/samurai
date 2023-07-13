import MyPosts_container from './MyPosts/MyPosts_container';
import Profile__Info from './Profile__Info/Profile__Info';

const Profile = (props) => {
   return (
      <div>
         <Profile__Info info={props.store.getState().me} />
         <MyPosts_container store={props.store} />

      </div >
   )
}

export default Profile;