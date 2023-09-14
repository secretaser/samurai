import style from './css/Users.module.css';
import Paginator from '../common/Paginator/Paginator';
import User from './User';

const Users = (props) => {

   return <>

      <div className={style.content}>
         <Paginator totalItemsCount={props.totalUsersCount} currentPage={props.currentPage} onPageChange={props.onPageChange} pageSize={props.pageSize} />


         {props.users.map(u => (<User
            key={u.id}
            user={u}
            followingInProgress={props.followingInProgress}
            unfollow={props.unfollow}
            follow={props.follow}
            isAuth={props.isAuth}
         />))}

         <Paginator totalItemsCount={props.totalUsersCount} currentPage={props.currentPage} onPageChange={props.onPageChange} pageSize={props.pageSize} />
      </div>
   </>
};

export default Users;