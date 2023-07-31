import style from './css/Profile__Info.module.css'

const Profile__Info = (props) => {
   return (
      <div>
         <div className={style.content__cover}>
            <img src={props.info.coverLink} alt="" />
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
                  <div className={style.info__name}>{props.info.name}</div>
                  <div className={style.info__additional}>
                     <p>Born: {props.info.birthDate}</p>
                     <p>City: {props.info.city}</p>
                     <p>Education: {props.info.education}</p>
                     <p>Employment: {props.info.employment}</p>
                  </div>
               </div>
            </div>
         </div>
      </div >
   )
}

export default Profile__Info;