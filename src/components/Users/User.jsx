import style from './css/Users.module.css';
// import ProfileDefPicSmall from '../../assets/images/ProfileDefPicSmall.jfif';
import { NavLink } from 'react-router-dom';

const User = ({ user, followingInProgress, unfollow, follow, isAuth, ProfileDefPicSmall }) => {
   const cutText = (initName) => {
      const maxNameLength = 16;
      if (initName != null && initName.length > maxNameLength) {
         return (initName.slice(0, maxNameLength) + '...');
      } else return initName
   };

   return (
      <div className={style.user_container}>

         <div className={style.left}>
            <div className={style.image}>
               <NavLink to={'/profile/' + user.id}>
                  <img src={user.photos.small ?
                     user.photos.small : ProfileDefPicSmall} alt="" />
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
            <NavLink to={'/profile/' + user.id}><div className={style.name}>{cutText(user.name)}</div></NavLink>
            <div className={style.location}>
               {'u.location.city'}, {'u.location.country'}
            </div>
            <div className={style.status}>{cutText(user.status)}</div>
         </div>

         <div className={style.actions}>
            <button className={style.buttonCome}>Зайти</button>
            <button className={style.buttonSmoke}>Покурить</button>
            <button className={style.buttonBother}>Доебаться</button>
         </div>
      </div>)
};

export default User;