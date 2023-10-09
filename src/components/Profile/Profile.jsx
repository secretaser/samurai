import MyPostsContainer from './MyPosts/MyPostsContainer';
import MyPostsContainerLoading from './MyPosts/MyPostsContainerLoading';
import Profile__Info from './Profile__Info/Profile__Info';
import Profile__InfoLoaidng from './Profile__Info/Profile__InfoLoading';

const Profile = (props) => {
   return (
      <>
         {props.isFetching || !props.profile ? <Profile__InfoLoaidng /> : <Profile__Info profile={props.profile}
            status={props.status}
            updateStatus={props.updateStatus}
            isOwner={props.isOwner}
            savePhoto={props.savePhoto}
            setProfileInfoSuccess={props.setProfileInfoSuccess}
            saveInfo={props.saveInfo}
            isFetching={props.isFetching} />}
         {props.isFetching || !props.profile ? <MyPostsContainerLoading /> : <MyPostsContainer />}
      </>
   )
}

export default Profile;