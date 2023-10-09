import { createRef, useEffect, useRef } from 'react';
import { required, maxLengthCreator } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';
import style from './css/MyPosts.module.css';
import { Field, reduxForm } from 'redux-form';

// const maxLength200 = maxLengthCreator(200);

const NewPostForm = (props) => {

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
      if (e.target.className == style.posts__input) {
         textarea = e.target
         textarea.style.height = 0 + 'px'
         textarea.style.height = textarea.scrollHeight + 'px'
         // console.log(textarea.value.trim());
         return;
      }
      if (!!textarea && e.target.closest('button') && e.target.closest('button').className == style.posts__button) {
         textarea.style.height = 0 + 'px'
      }
   }

   return (
      <form onSubmit={props.handleSubmit} className={style.posts__new}>
         <Field className={style.posts__input}
            placeholder="WASSUUUUUUUUUUP"
            component='textarea'
            // component={Textarea}
            name='newPostBody'
            validate={[required]}
            rows={1}
            wrap='hard'
         />
         <button ref={buttonRef} className={style.posts__button}>Post</button>
      </form>
   )
};
const NewPostReduxForm = reduxForm({ form: 'newPost' })(NewPostForm);

export default NewPostReduxForm;