import style from './css/Profile__Info.module.css';


const Profile__InfoLoaidng = () => {
   let contacts = []

   for (let i = 0; i < 8; i++) {
      contacts[i] = <div className={style.infoLoading__contactName}></div>;

   }
   return (
      <div>
         <div className={style.content__cover}>
            <img src='https://midag.ru/wp-content/uploads/2022/11/religiya-%E2%84%9645_1-2.jpg' alt="" />
         </div>

         <div className={style.content__item}>
            <div className={style.infoLoading}>

               <div className={style.infoLoading__photo}></div>

               <div className={style.infoLoading__info}>
                  <div className={style.infoLoading__name}></div>
                  <div className={style.infoLoading__status}>
                  </div>
                  <div className={style.infoLoading__additional}>
                     <div className={style.infoLoading__contacts}>
                        <div className={style.infoLoading__looking}></div>
                        <div className={style.infoLoading__contactsHead}>
                           <div className={style.infoLoading__contactsHeader}></div>
                           {contacts}
                        </div>

                     </div>
                  </div>
               </div>

            </div>
         </div>
      </div >
   )
}

export default Profile__InfoLoaidng;