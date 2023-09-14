import style from './css/Users.module.css';

const UserLoading = (props) => {
   return (
      <div className={style.loading__container}>

         <div className={style.loading__left}>

            <div className={style.loading__image}></div>
            <div className={style.loading__buttonAdd}></div>

         </div>

         <div className={style.loading__central}>
            <div className={style.loading__name}></div>
            <div className={style.loading__location}></div>
            <div className={style.loading__status}></div>
         </div>

         <div className={style.loading__actions}>
            <div className={style.loading__buttonRight}></div>
            <div className={style.loading__buttonRight}></div>
            <div className={style.loading__buttonRight}></div>
         </div>
      </div>
   )
}

export default UserLoading;