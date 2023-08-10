import Preloader from '../../common/Preloader/Preloader';
import style from './css/Profile__Info.module.css'
import ProfileDefPicSmall from './../../../assets/images/ProfileDefPicSmall.jfif'

const Profile__Info = (props) => {
   let photo = (photos) => {
      if (photos.large || photos.small) {
         if (photos.large) {
            return photos.large
         } else return photos.small;
      } else return ProfileDefPicSmall;

   }
   if (!props.profile) {
      return <Preloader />
   } else return (
      <div>
         <div className={style.content__cover}>
            <img src={props.info.coverLink} alt="" />
         </div>
         <div className={style.content__item}>
            {/* <div className={style.content__info + ' ' + style.info}> */}
            <div className={style.info}>
               <div className={style.info__item}>
                  <div className={style.info__photo}>
                     <img src={photo(props.profile.photos)} alt="" />
                  </div>
               </div>
               <div className={style.info__item}>
                  <div className={style.info__name}>{props.profile.fullName}</div>
                  <div className={style.info__status}>{props.profile.aboutMe}</div>
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