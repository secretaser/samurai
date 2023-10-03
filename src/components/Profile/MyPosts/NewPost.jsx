import { required, maxLengthCreator } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';
import style from './css/MyPosts.module.css';
import { Field, reduxForm } from 'redux-form';

// const maxLength200 = maxLengthCreator(200);

const NewPostForm = (props) => {
   return (
      <form onSubmit={props.handleSubmit} className={style.posts__new}>
         <Field className={style.posts__input}
            placeholder="WASSUUUUUUUUUUP"
            component='textarea'
            // component={Textarea}
            name='newPostBody'
            validate={[required]}
         />
         <button className={style.posts__button}>Post</button>
      </form>
   )
};
const NewPostReduxForm = reduxForm({ form: 'newPost' })(NewPostForm);

export default NewPostReduxForm;