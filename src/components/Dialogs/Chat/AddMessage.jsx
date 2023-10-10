import { useEffect, useRef } from 'react';
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';
import style from './css/Chat.module.css';
import { Field, reduxForm } from 'redux-form';

// const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
   const buttonRef = useRef()
   let textarea;
   const enterHandle = (e) => {
      if (e.key == 'Enter' && !e.shiftKey) {
         e.preventDefault()
         buttonRef.current.click()
      }
   }

   useEffect(() => {
      window.addEventListener('keydown', enterHandle)
      window.addEventListener('input', handle)
      window.addEventListener('click', handle)
      return () => {
         window.removeEventListener('keydown', enterHandle)
         window.removeEventListener('input', handle)
         window.removeEventListener('click', handle)
      };
   }, []);

   const handle = (e) => {
      if (e.target.className == style.input_container__input) {
         textarea = e.target
         textarea.style.height = 0 + 'px'
         textarea.style.height = textarea.scrollHeight + 'px'
         return;
      }
      if (!!textarea && e.target.closest('button') && e.target.closest('button').className == style.button) {
         textarea.style.height = 0 + 'px'
      }
   }

   return (
      <form className={style.input_container} onSubmit={props.handleSubmit}>
         <Field className={style.input_container__input}
            placeholder='Type your message...'
            name='newMessageBody'
            component='textarea'
            validate={[required]}
         />
         <button ref={buttonRef} className={style.button}>
            <svg className={style.button__svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="m4.578.33C3.408-.244,2.025-.053,1.056.82.087,1.692-.25,3.048.197,4.272l4.106,7.734L.275,19.733c-.445,1.226-.105,2.58.865,3.45.598.536,1.352.813,2.115.813.477,0,.958-.108,1.407-.329l19.232-11.671L4.578.33Zm-1.577,2.854c-.004-.038.007-.084.062-.133.065-.058.119-.055.157-.043l12.398,7.492H6.9L3.001,3.184Zm.299,17.809c-.039.013-.093.015-.156-.042-.056-.05-.066-.098-.062-.136l3.827-7.314h8.731l-12.339,7.492Z" /></svg>
         </button>
      </form>
   )
}

const AddMessageReduxForm = reduxForm({ form: 'addMessage' })(AddMessageForm)

export default AddMessageReduxForm;