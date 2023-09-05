import Preloader from '../../common/Preloader/Preloader';
import style from './css/Profile__Info.module.css'
import ProfileDefPicSmall from './../../../assets/images/ProfileDefPicSmall.jfif'
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import { useEffect, useState } from 'react';
import ProfileDataForm from './ProfileDataForm';

const Profile__Info = ({ profile, status, updateStatus, isOwner, savePhoto, setProfileInfoSuccess, saveInfo }) => {

   const onSubmit = (formData) => {
      let newProfile = {
         ...profile,
         contacts: { ...profile.contacts, ...formData }
      }
      for (let i = 0; i < Object.keys(newProfile.contacts).length; i++) {
         if (newProfile.contacts[Object.keys(newProfile.contacts)[i]]
            !== profile.contacts[Object.keys(newProfile.contacts)[i]]) {
            delete newProfile.photos;
            saveInfo(newProfile).then(
               () => {
                  setEditMode(false);
               }
            ).catch(() => { })
            break;
         };
      };

   }

   let [editMode, setEditMode] = useState(false);

   const onMainPhotoSelected = (e) => {
      if (e.target.files.length) {
         savePhoto(e.target.files[0]);
      }
   }

   if (!profile) {
      return <Preloader />
   } else {
      return (
         <div>
            <div className={style.content__cover}>
               <img src='https://midag.ru/wp-content/uploads/2022/11/religiya-%E2%84%9645_1-2.jpg' alt="" />
            </div>
            <div className={style.content__item}>
               <div className={style.info}>
                  <div className={style.info__item}>
                     <div className={style.info__photo}>
                        <img src={profile.photos.large || ProfileDefPicSmall} alt="" />
                        {isOwner && <div className={style.info__photo__upd}>
                           <div className={style.info__photo__upd__icon}>+</div>
                        </div>}
                        {isOwner && <input type='file' className={style.info__updatePhoto} onChange={onMainPhotoSelected} />}
                     </div>
                  </div>
                  {editMode ? <ProfileDataForm initialValues={profile.contacts} profile={profile} status={status} updateStatus={updateStatus} isOwner={isOwner} onSubmit={onSubmit} leaveEditMode={() => { setEditMode(false) }} /> :
                     <ProfileData profile={profile} status={status} updateStatus={updateStatus} isOwner={isOwner} goToEditmode={() => { setEditMode(true) }} />}
               </div>
            </div>
         </div >
      )
   }
}

const ProfileData = ({ profile, status, updateStatus, isOwner, goToEditmode }) => {

   const contactsNames = Object.keys(profile.contacts);

   const contacts = contactsNames.map(c => <div className={style.info__contactName}>
      {c}: {profile.contacts[c] ? <span href={profile.contacts[c]} target="_blank" className={style.info__contact}>{profile.contacts[c]}</span> :
         <span className={style.info__contactNull}>unknown</span>}</div>)

   return (<div className={style.info__info}>

      <div className={style.info__name}>{profile.fullName}</div>

      <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />

      <div className={style.info__additional}>
         <div className={style.info__contactName}>
            {profile.lookingForAJob ? 'Looking for a job' : `Isn't looking for a job`}
         </div>
         <div className={style.info__contactName}>Contacts:</div>
         <div onDoubleClick={goToEditmode} className={style.info__contacts}>
            {contacts}
         </div>
      </div>

   </div>)

}

export default Profile__Info;