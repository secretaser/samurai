import { Field, reduxForm } from "redux-form";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import style from './css/Profile__Info.module.css'
import { Input, createInfoField } from "../../common/FormsControls/FormsControls";


const ProfileDataForm = ({ profile, status, updateStatus, isOwner, handleSubmit, initialValues, error }) => {

   const contactsNames = Object.keys(profile.contacts);

   const contactsInputs = contactsNames.map(c => {
      return (
         <div key={c} className={style.info__contactName}>
            {c}: {createInfoField(Input, `Your ${c}`, c, style.contact__input, profile.contacts[c], { value: '' })}
         </div>
      )
   })

   return (
      <form className={style.info__info} onSubmit={handleSubmit}>
         <div className={style.info__name}>{profile.fullName}</div>

         <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />

         <div className={style.info__additional}>
            <div className={style.info__contactName}>
               {profile.lookingForAJob ? 'Looking for a job' : `Isn't looking for a job`}
            </div>
            <div className={style.info__contactName}>Contacts:</div>
            <div className={style.info__contacts}>
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