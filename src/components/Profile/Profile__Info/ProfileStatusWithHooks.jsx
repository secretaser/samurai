import React, { useEffect, useState } from 'react';
import style from './css/Profile__Info.module.css';

const ProfileStatusWithHooks = (props) => {

   let [editMode, setEditMode] = useState(false);
   let [status, setStatus] = useState(props.status);

   useEffect(() => {
      setStatus(props.status)
   }, [props.status]);

   const activateEditMode = () => {
      setEditMode(true);
   }
   const deactivateEditMode = () => {
      setEditMode(false);

      if (status !== props.status) {
         props.updateStatus(status);
      }
   }

   const onStatusChange = (e) => {
      setStatus(e.currentTarget.value)
   };

   return (
      <div className={style.status}>
         {!editMode && <div onClick={activateEditMode} className={style.status__text}>{props.status || 'How are you today?'}</div>}

         {editMode &&
            <div className={style.status__inputContainer}>
               <input onBlur={deactivateEditMode}
                  onChange={onStatusChange}
                  value={status}
                  placeholder='How are you today?' autoFocus />
            </div>}
      </div>
   )
};

export default ProfileStatusWithHooks