import React, { useEffect, useState } from 'react';
import { Field, reduxForm } from "redux-form";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import style from './css/Profile__Info.module.css'
import { InputInfo, createInfoField } from "../../common/FormsControls/FormsControls";


const ProfileDataForm = ({ profile, status, updateStatus, isOwner, handleSubmit, initialValues, error }) => {

   let [editMode, setEditMode] = useState(false);

   const activateEditMode = () => {
      setEditMode(true);
   }
   const deactivateEditMode = () => {
      handleSubmit()
      setEditMode(false);
   }

   const check = (e) => {
      console.log(e.target);
      console.log(e.relatedTarget);
   }

   // SUBMIT ПО КНОПКЕ ПРОСТО


   const contactsNames = Object.keys(profile.contacts);

   const contactsInputs = contactsNames.map(c => {
      return (
         <div key={c} className={style.info__contactName}>
            {c}: {createInfoField(InputInfo, `Fill me!`, c, style.info__input, { onClick: check })}
         </div>
      )
   })

   return (
      <form className={style.info__info} onSubmit={handleSubmit}>
         <div className={style.info__name}>{profile.fullName}</div>

         <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />

         <div className={style.info__additional}>
            <div className={style.info__looking}>
               {profile.lookingForAJob ? 'Looking for a job' : `Isn't looking for a job`}
            </div>
            <div className={editMode ? style.info__contactsActive : style.info__contacts} onBlur={deactivateEditMode} onClick={activateEditMode}>
               <div className={style.info__contactsHead}>Contacts:</div>
               {contactsInputs}
            </div>
         </div>
         {error && <div className={style.info__error}>{error}</div>}
         <button>Save</button>
      </form>
   )
}

const ProfileDataReduxForm = reduxForm({ form: 'profileInfo' })(ProfileDataForm);

export default ProfileDataReduxForm;