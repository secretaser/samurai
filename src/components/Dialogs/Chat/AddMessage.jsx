import { maxLengthCreator, required } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';
import style from './css/Chat.module.css';
import { Field, reduxForm } from 'redux-form';

// const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
   return (
      <form className={style.input_container} onSubmit={props.handleSubmit}>
         <Field className={style.input_container__input}
            placeholder='Type your message...'
            name='newMessageBody'
            component='textarea'
            // component={Textarea}
            validate={[required]}
         />
         <button className={style.input_container__button}>Send</button>
      </form>
   )
}

const AddMessageReduxForm = reduxForm({ form: 'addMessage' })(AddMessageForm)

export default AddMessageReduxForm;