import React, { useEffect, useState } from 'react';
import style from './css/Profile__Info.module.css';

type propsType = {
   status: string
   updateStatus: (status: string) => void
}

const ProfileStatusWithHooks: React.FC<propsType> = ({ status, updateStatus }) => {

   let [editMode, setEditMode] = useState(false);
   let [localStatus, setStatus] = useState(status);

   useEffect(() => {
      setStatus(status)
   }, [status]);

   const activateEditMode = () => {
      setEditMode(true);
   }
   const deactivateEditMode = () => {
      setEditMode(false);

      if (localStatus !== status) {
         updateStatus(localStatus);
      }
   }

   const onStatusChange = (e) => {
      setStatus(e.currentTarget.value)
   };

   return (
      <div className={style.status}>
         {!editMode && <div onClick={activateEditMode} className={style.status__text}>{status || 'How are you today?'}</div>}

         {editMode &&
            <div className={style.status__inputContainer}>
               <input onBlur={deactivateEditMode}
                  onChange={onStatusChange}
                  value={localStatus}
                  placeholder='How are you today?' autoFocus />
            </div>}
      </div>
   )
};

export default ProfileStatusWithHooks