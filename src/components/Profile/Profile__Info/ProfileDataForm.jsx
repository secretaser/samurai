import React, { useEffect, useState } from 'react';
import { Field, reduxForm } from "redux-form";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import style from './css/Profile__Info.module.css'
import { InputInfo, createInfoField } from "../../common/FormsControls/FormsControls";


const ProfileDataForm = ({ profile, status, updateStatus, handleSubmit, initialValues, error }) => {
   let [editMode, setEditMode] = useState(false);

   const activateEditMode = () => {
      setEditMode(true);
   }
   const deactivateEditMode = () => {
      handleSubmit()
      setEditMode(false);
   }

   const clickHandler = (e) => {
      if (!e.target.closest('form')) {
         deactivateEditMode();
      }
   }

   useEffect(() => {
      console.log('mounted');
      window.addEventListener('click', clickHandler)
      return () => {
         window.removeEventListener('click', clickHandler)
      }
   }, [])

   let [check, setCheck] = useState(profile.lookingForAJob)

   const contactsNames = Object.keys(profile.contacts);
   const contactsInputs = contactsNames.map(c => {
      return (
         <div key={c} className={style.info__contactName}>
            {c}: {createInfoField(InputInfo, `Fill me!`, 'contacts.' + c, style.info__input)}
         </div>
      )
   })

   return (
      <form className={style.info__info} onSubmit={handleSubmit}>
         <div className={style.info__name}>{profile.fullName}</div>

         <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />

         <div className={style.info__additional}>
            <div className={editMode ? style.info__contactsActive : style.info__contacts} onClick={activateEditMode}>

               <div onClick={() => setCheck(!check)} className={check ? style.info__lookingActive : style.info__looking}>
                  <Field checked={check} component='input' type='checkbox' name='lookingForAJob' className={style.info__checkbox} />
                  <label for='lookingForAJob'>{editMode ? 'Looking for a job?' : profile.lookingForAJob ? 'Looking for a job' : `Not looking for a job`}</label>
               </div>

               <div className={style.info__contactsHead}>Contacts:</div>
               {contactsInputs}
            </div>
         </div>
         {error && <div className={style.info__error}>{error}</div>}
      </form>
   )
}

const ProfileDataReduxForm = reduxForm({ form: 'profileInfo' })(ProfileDataForm);

export default ProfileDataReduxForm;