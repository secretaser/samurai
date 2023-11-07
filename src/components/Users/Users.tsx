import style from './css/Users.module.css';
import Paginator from '../common/Paginator/Paginator.tsx';
import User from './User';
import React from 'react';
import { userType } from '../../types/types.ts';

type propsType = {
   totalUsersCount: number
   pageSize: number
   users: Array<userType>
   isFetching: boolean
   followingInProgress: Array<number>
   onPageChange: (pageNumber: number) => void
   follow: (userId: number) => void
   unfollow: (userId: number) => void
   isAuth: boolean
   currentPage: number
}

const Users: React.FC<propsType> = ({ currentPage, totalUsersCount, pageSize, users, isFetching, followingInProgress, onPageChange, follow, unfollow, isAuth }) => {

   return <div className={style.content}>
      <Paginator totalItemsCount={totalUsersCount} currentPage={currentPage} onPageChange={onPageChange} pageSize={pageSize} />


      {users.map(u => (<User
         key={u.id}
         user={u}
         followingInProgress={followingInProgress}
         unfollow={unfollow}
         follow={follow}
         isAuth={isAuth}
      />))}

      <Paginator totalItemsCount={totalUsersCount} currentPage={currentPage} onPageChange={onPageChange} pageSize={pageSize} />
   </div>
};

export default Users;