import Preloader from '../../common/Preloader/Preloader';
import style from './css/Profile__Info.module.css'
import ProfileDefPicSmall from './../../../assets/images/ProfileDefPicSmall.jfif'
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const Profile__Info = ({ profile, status, updateStatus }) => {
   let photo = (photos) => {
      if (photos.large || photos.small) {
         if (photos.large) {
            return photos.large
         } else return photos.small;
      } else return ProfileDefPicSmall;

   }
   if (!profile) {
      return <Preloader />
   } else return (
      <div>
         <div className={style.content__cover}>
            <img src='https://midag.ru/wp-content/uploads/2022/11/religiya-%E2%84%9645_1-2.jpg' alt="" />
         </div>
         <div className={style.content__item}>
            <div className={style.info}>
               <div className={style.info__item}>
                  <div className={style.info__photo}>
                     <img src={photo(profile.photos)} alt="" />
                  </div>
               </div>
               <div className={style.info__item}>
                  <div className={style.info__name}>{profile.fullName}</div>

                  <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />

                  <div className={style.info__additional}>
                     <p>Born: 10.11.2022</p>
                     <p>City: сикрет)))</p>
                     <p>Education: ПТУ</p>
                     <p>Employment: СЭТ</p>
                  </div>
               </div>
            </div>
         </div>
      </div >
   )
}

export default Profile__Info;