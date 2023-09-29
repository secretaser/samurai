import MyPostsContainer from './MyPosts/MyPostsContainer';
import Profile__Info from './Profile__Info/Profile__Info';
import Profile__InfoLoaidng from './Profile__Info/Profile__InfoLoading';

const Profile = (props) => {
   return (
      <div>
         {props.isFetching ? <Profile__InfoLoaidng /> : <Profile__Info profile={props.profile}
            status={props.status}
            updateStatus={props.updateStatus}
            isOwner={props.isOwner}
            savePhoto={props.savePhoto}
            setProfileInfoSuccess={props.setProfileInfoSuccess}
            saveInfo={props.saveInfo}
            isFetching={props.isFetching} />}
         <MyPostsContainer />
      </div >
   )
}

export default Profile;