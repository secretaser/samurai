import style from './css/Profile__Info.module.css'

const Profile__Info = (props) => {
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
                     <img src={props.info.avaLink} alt="" />
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