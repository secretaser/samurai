import MyPosts from './MyPosts/MyPosts';
import Profile__Info from './Profile__Info/Profile__Info';
import style from './css/Profile.module.css'

const Profile = () => {
   return (
      <div>
         <Profile__Info />
         <MyPosts />

      </div >
   )
}

export default Profile;