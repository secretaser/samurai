import style from './css/Users.module.css';
import Paginator from '../common/Paginator/Paginator';
import User from './User';

const Users = (props) => {

   const cutText = (initName) => {
      if (initName != null && initName.length > 16) {
         return (initName.slice(0, 12) + '...');
      } else return initName
   };
   console.log(props);
   return <div className={style.content}>

      <Paginator totalUsersCount={props.totalUsersCount} currentPage={props.currentPage} onPageChange={props.onPageChange} pageSize={props.pageSize} />

      {props.users.map(u => (<User
         key={u.id}
         user={u}
         followingInProgress={props.followingInProgress}
         unfollow={props.unfollow}
         follow={props.follow}
         isAuth={props.isAuth}
      />))}

      <Paginator totalUsersCount={props.totalUsersCount} currentPage={props.currentPage} onPageChange={props.onPageChange} pageSize={props.pageSize} />
   </div>
};

export default Users;