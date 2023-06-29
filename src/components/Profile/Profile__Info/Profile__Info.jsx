import style from './css/Profile__Info.module.css'

const Profile__Info = () => {
   return (
      <div>
         <div className={style.content__cover}>
            <img src="https://htmlcolorcodes.com/assets/images/html-color-codes-color-tutorials-hero.jpg" alt="" />
         </div>
         <div className={style.content__item}>
            {/* <div className={style.content__info + ' ' + style.info}> */}
            <div className={style.info}>
               <div className={style.info__item}>
                  <div className={style.info__photo}>
                     <img src="https://kartinkof.club/uploads/posts/2022-04/1649621946_24-kartinkof-club-p-ugarnie-kartinki-dlya-avi-vk-26.jpg" alt="" />
                  </div>
               </div>
               <div className={style.info__item}>
                  <div className={style.info__name}>Антон Г.</div>
                  <div className={style.info__additional}>
                     <p>Born: 7 january</p>
                     <p>City: Jerusalem</p>
                     <p>Education: none taken</p>
                     <p>Employment: carpenter</p>
                  </div>
               </div>
            </div>
         </div>
      </div >
   )
}

export default Profile__Info;