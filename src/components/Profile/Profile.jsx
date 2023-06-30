import MyPosts from './MyPosts/MyPosts';
import Profile__Info from './Profile__Info/Profile__Info';
import style from './css/Profile.module.css'

const Profile = (props) => {
   return (
      <div>
         <Profile__Info />
         <MyPosts postData={props.posts.postData} />

      </div >
   )
}

export default Profile;