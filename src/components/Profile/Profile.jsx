import MyPostsContainer from './MyPosts/MyPostsContainer';
import Profile__Info from './Profile__Info/Profile__Info';

const Profile = (props) => {
   return (
      <div>
         <Profile__Info profile={props.profile}
            status={props.status}
            updateStatus={props.updateStatus}
            isOwner={props.isOwner}
            savePhoto={props.savePhoto} />
         <MyPostsContainer />
      </div >
   )
}

export default Profile;