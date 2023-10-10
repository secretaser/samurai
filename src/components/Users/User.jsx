import style from './css/Users.module.css';
import profileDef from '../../assets/images/profileicon.jpg';
import { NavLink } from 'react-router-dom';

const User = ({ user, followingInProgress, unfollow, follow, isAuth, ProfileDefPicSmall }) => {
   // const cutText = (initName) => {
   //    const maxNameLength = 16;
   //    if (initName != null && initName.length > maxNameLength) {
   //       return (initName.slice(0, maxNameLength) + '...');
   //    } else return initName
   // };
   // const randomColor = 0;
   const setBg = () => {
      let num = 0;
      for (let i = 0; i < user.name.length; i++) {
         num += user.name.charCodeAt(i) / (user.name.length * 120);
      }
      return Math.floor(num * 4000).toString(16);
   }

   return (
      <div className={style.user_container}>

         <div className={style.left}>
            <div className={style.image}>
               <NavLink to={'/profile/' + user.id}>
                  {/* <img src={user.photos.small || profileDef} alt="" /> */}
                  {user.photos.small ? <img src={user.photos.small} alt="" /> :
                     <svg className={style.vector} xmlns="http://www.w3.org/2000/svg" fill={'#' + setBg()} viewBox="0 0 24 24" width="24" height="24"><path d="M12,12A6,6,0,1,0,6,6,6.006,6.006,0,0,0,12,12ZM12,2A4,4,0,1,1,8,6,4,4,0,0,1,12,2Z" /><path d="M12,14a9.01,9.01,0,0,0-9,9,1,1,0,0,0,2,0,7,7,0,0,1,14,0,1,1,0,0,0,2,0A9.01,9.01,0,0,0,12,14Z" /></svg>
                  }
               </NavLink>
            </div>

            {user.followed ?
               <button className={style.buttonDelete} disabled={followingInProgress
                  .some(id => id === user.id) || !isAuth} onClick={() => unfollow(user.id)}>delete</button>
               :
               <button className={style.buttonAdd} disabled={followingInProgress
                  .some(id => id === user.id) || !isAuth} onClick={() => follow(user.id)}>add</button>}
         </div>

         <div className={style.central}>
            <NavLink to={'/profile/' + user.id}><div className={style.name}>{user.name}</div></NavLink>
            <div className={style.location}>
               id{user.id}
            </div>
            <div className={style.status}>{user.status}</div>
         </div>

         <div className={style.actions}>
            <button className={style.buttonCome}>text</button>
            <button className={style.buttonSmoke}>wink</button>
            <button className={style.buttonBother}>block</button>
         </div>
      </div>)
};

export default User;