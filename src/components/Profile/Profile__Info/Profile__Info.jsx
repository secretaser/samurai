import Preloader from '../../common/Preloader/Preloader';
import style from './css/Profile__Info.module.css'
import ProfileDefPicSmall from './../../../assets/images/ProfileDefPicSmall.jfif'
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const Profile__Info = (props) => {
   // console.log('render info');
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
<<<<<<< HEAD
            <img src='https://midag.ru/wp-content/uploads/2022/11/religiya-%E2%84%9645_1-2.jpg' alt="" />
=======
            <img src={props.info.coverLink} alt="" />
>>>>>>> 5c0e6869ff15682da91c38fa3111f9977f394917
         </div>
         <div className={style.content__item}>
            <div className={style.info}>
               <div className={style.info__item}>
                  <div className={style.info__photo}>
                     <img src={photo(props.profile.photos)} alt="" />
                  </div>
               </div>
               <div className={style.info__item}>
<<<<<<< HEAD
                  <div className={style.info__name}>{props.profile.fullName}</div>

                  <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />

                  <div className={style.info__additional}>
                     {/* <p>Born: {props.info.birthDate}</p>
                     <p>City: {props.info.city}</p>
                     <p>Education: {props.info.education}</p>
                     <p>Employment: {props.info.employment}</p> */}
                     <p>Born: 10.11.2022</p>
                     <p>City: сикрет)))</p>
                     <p>Education: ПТУ</p>
                     <p>Employment: СЭТ</p>
=======
                  <div className={style.info__name}>{props.info.name}</div>
                  <div className={style.info__additional}>
                     <p>День рождения: {props.info.birthdate}</p>
                     <p>Город: {props.info.city}</p>
                     <p>Образование: {props.info.education}</p>
                     <p>Работа: {props.info.job}</p>
>>>>>>> 5c0e6869ff15682da91c38fa3111f9977f394917
                  </div>
               </div>
            </div>
         </div>
      </div >
   )
}

export default Profile__Info;