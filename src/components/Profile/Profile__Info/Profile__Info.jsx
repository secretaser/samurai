import Preloader from '../../common/Preloader/Preloader';
import React, { useEffect, useState } from 'react';
import style from './css/Profile__Info.module.css'
// import ProfileDefPicSmall from './../../../assets/images/profileicon.jpg';
import ProfileDataForm from './ProfileDataForm';
import bg from './../../../assets/images/bg.png'

const Profile__Info = ({ profile, status, updateStatus, isOwner, savePhoto, saveInfo, isFetching }) => {

   const onSubmit = (formData) => {
      let newProfile = {
         ...profile,
         lookingForAJob: formData.lookingForAJob,
         contacts: { ...profile.contacts, ...formData.contacts },
      }
      for (let i = 0; i < Object.keys(newProfile.contacts).length; i++) {
         if (newProfile.contacts[Object.keys(newProfile.contacts)[i]]
            !== profile.contacts[Object.keys(newProfile.contacts)[i]] ||
            newProfile.lookingForAJob !== profile.lookingForAJob) {
            delete newProfile.photos;
            saveInfo(newProfile).then(
               () => {
                  setEditMode(false);
               }
            ).catch(() => { })
            console.log('sent');
            break;
         }
      };
      setEditMode(false);
   }

   let [editMode, setEditMode] = useState(false);

   const onMainPhotoSelected = (e) => {
      if (e.target.files.length) {
         savePhoto(e.target.files[0]);
      }
   }

   const setBg = () => {
      return Math.floor(Math.random() * 16777215).toString(16);
   }
   if (!profile) {
      return <Preloader />
   } else {
      return (
         <div>
            <div className={style.content__cover}>
               <img src={bg} alt="" />
            </div>
            <div className={style.content__item}>
               <div className={style.info}>
                  <div className={style.info__item}>
                     <div className={style.info__photo}>
                        {profile.photos.large ? <img src={profile.photos.large} alt="" /> : <svg className={style.info__photo__vector} xmlns="http://www.w3.org/2000/svg" fill={'#' + setBg()} viewBox="0 0 24 24" width="24" height="24"><path d="M12,12A6,6,0,1,0,6,6,6.006,6.006,0,0,0,12,12ZM12,2A4,4,0,1,1,8,6,4,4,0,0,1,12,2Z" /><path d="M12,14a9.01,9.01,0,0,0-9,9,1,1,0,0,0,2,0,7,7,0,0,1,14,0,1,1,0,0,0,2,0A9.01,9.01,0,0,0,12,14Z" /></svg>}
                        {isOwner && <div className={style.info__photo__upd}>
                           <div className={style.info__photo__upd__icon}>+</div>
                        </div>}
                        {isOwner && <input type='file' className={style.info__updatePhoto} onChange={onMainPhotoSelected} />}
                     </div>
                  </div>
                  {isOwner ? <ProfileDataForm initialValues={profile} profile={profile} status={status} updateStatus={updateStatus} onSubmit={onSubmit} /> :
                     <ProfileData profile={profile} status={status} updateStatus={updateStatus} isOwner={isOwner} goToEditmode={() => { setEditMode(true) }} />}
               </div>
            </div>
         </div >
      )
   }
}

const ProfileData = ({ profile, status, updateStatus, goToEditmode }) => {

   const contactsNames = Object.keys(profile.contacts);

   const contacts = contactsNames.map(c => <div className={style.info__contactName}>
      {c}: {profile.contacts[c] ? <a href={profile.contacts[c]} target="_blank" className={style.info__contact}>{profile.contacts[c]}</a> :
         <div className={style.info__contactNull}>unknown</div>}</div>)

   return (<div className={style.info__info}>

      <div className={style.info__name}>{profile.fullName}</div>

      {/* <ProfileStatusWithHooks status={status} updateStatus={updateStatus} /> */}
      <div className={style.status}>
         <div className={style.status__text}>{status || 'No status'}</div>
      </div>

      <div className={style.info__additional}>
         <div className={style.info__contacts}>
            <div className={style.info__looking}>
               {profile.lookingForAJob ? 'Looking for a job' : `Isn't looking for a job`}
            </div>
            <div className={style.info__contactsHead}>Contacts:</div>
            {contacts}
         </div>
      </div>

   </div>)

}

export default Profile__Info;