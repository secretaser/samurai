import MyPosts from './MyPosts/MyPosts';
import Profile__Info from './Profile__Info/Profile__Info';
import style from './css/Profile.module.css'

const Profile = (props) => {
   return (
      <div>
         <Profile__Info info={props.info} />
         <MyPosts postData={props.posts.postData} info={props.info} addPost={props.addPost} />

      </div >
   )
}

export default Profile;