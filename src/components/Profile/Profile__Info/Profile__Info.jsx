import style from './css/Profile__Info.module.css'

const Profile__Info = (props) => {
   return (
      <div>
         <div className={style.content__cover}>
            <img src={props.info.coverLink} alt="" />
         </div>
         <div className={style.content__item}>
            <div className={style.info}>
               <div className={style.info__item}>
                  <div className={style.info__photo}>
                     <img src={props.info.avaLink} alt="" />
                  </div>
               </div>
               <div className={style.info__item}>
                  <div className={style.info__name}>{props.info.name}</div>
                  <div className={style.info__additional}>
                     <p>День рождения: {props.info.birthdate}</p>
                     <p>Город: {props.info.city}</p>
                     <p>Образование: {props.info.education}</p>
                     <p>Работа: {props.info.job}</p>
                  </div>
               </div>
            </div>
         </div>
      </div >
   )
}

export default Profile__Info;