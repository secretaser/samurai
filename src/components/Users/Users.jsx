import style from './css/Users.module.css';
import ProfileDefPicSmall from '../../assets/images/ProfileDefPicSmall.jfif';
import { NavLink } from 'react-router-dom';
const Users = (props) => {
   let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
   let buttons = [];
   const cutText = (initName) => {
      if (initName != null && initName.length > 16) {
         return (initName.slice(0, 12) + '...');
      } else return initName
   };
   for (let i = 0; i < 5; i++) {
      if (props.currentPage > 2 && pagesCount - props.currentPage >= 2) {
         buttons.push(props.currentPage + i - 2);
      } else if (props.currentPage === 2) {
         buttons.push(props.currentPage + i - 1);
      } else buttons.push(props.currentPage + i);
   };
   let allButtons = (buttons, currentPage, onPageChange, pagesCount) => {
      return (
         <div className={style.navButtons}>
            <button onClick={() => { if (currentPage > 1) onPageChange(currentPage - 1) }} className={currentPage > 1 ? style.arrowBack : style.arrowBackInactive}></button>
            {buttons.map(b => <button onClick={() => { onPageChange(b) }}
               className={currentPage === b ? style.navButton_active : style.navButton}>{b}</button>
            )}
            <button onClick={() => { if (currentPage < pagesCount) onPageChange(currentPage + 1) }} className={currentPage < pagesCount ? style.arrowForward : style.arrowForwardInactive}></button>
         </div>
      )
   }

   return <div className={style.content}>

      {allButtons(buttons, props.currentPage, props.onPageChange, pagesCount)}

      {props.users.map(u => (<div key={u.id}>
         <div className={style.user_container}>

            <div className={style.left}>
               <div className={style.image}>
                  <NavLink to={'/profile/' + u.id}>
                     <img src={u.photos.small ?
                        u.photos.small : ProfileDefPicSmall} alt="" />
                  </NavLink>
               </div>

               {u.followed ?
                  <button className={style.buttonDelete} disabled={props.followingInProgress
                     .some(id => id === u.id) || !props.isAuth} onClick={() => props.unfollow(u.id)}>delete</button>
                  :
                  <button className={style.buttonAdd} disabled={props.followingInProgress
                     .some(id => id === u.id) || !props.isAuth} onClick={() => props.follow(u.id)}>add</button>}
            </div>

            <div className={style.central}>
               <NavLink to={'/profile/' + u.id}><div className={style.name}>{cutText(u.name)}</div></NavLink>
               <div className={style.location}>
                  {'u.location.city'}, {'u.location.country'}
               </div>
               <div className={style.status}>{cutText(u.status)}</div>
            </div>

            <div className={style.actions}>
               <button className={style.buttonCome}>Зайти</button>
               <button className={style.buttonSmoke}>Покурить</button>
               <button className={style.buttonBother}>Доебаться</button>
            </div>
         </div>
      </div>))}

      {allButtons(buttons, props.currentPage, props.onPageChange, pagesCount)}
   </div>
};

export default Users;