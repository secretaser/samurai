import style from './css/Users.module.css';
import Paginator from '../common/Paginator/Paginator.tsx';
import UserLoading from './UserLoading';

const UsersLoading = (props) => {

   const a = props.pageSize;
   let arr = [];

   for (let i = 0; i < a; i++) {
      arr[i] = i;
   }

   return (
      <div className={style.loading__content}>
         <Paginator totalItemsCount={props.totalUsersCount} currentPage={props.currentPage} onPageChange={props.onPageChange} pageSize={props.pageSize} />

         {arr.map(u => (<UserLoading key={u} />))}

         <Paginator totalItemsCount={props.totalUsersCount} currentPage={props.currentPage} onPageChange={props.onPageChange} pageSize={props.pageSize} />
      </div>
   )
}

export default UsersLoading;