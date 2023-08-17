import { Field, reduxForm } from 'redux-form';
import style from './css/Login.module.css';


const LoginForm = (props) => {
   return (
      <form onSubmit={props.handleSubmit}>
         <div className={style.inputLoginContainer}>
            <Field className={style.inputLogin} name={'login'} component={'input'} />
         </div>
         <div className={style.inputPasswordContainer}>
            <Field className={style.inputPassword} name={'password'} component={'input'} />
         </div>
         <div className={style.inputRememberContainer}>
            <Field className={style.inputRemember} name={'rememberMe'} component={'input'} type={"checkbox"} />
            <p>Remember me</p>
         </div>
         <div className={style.submitContainer}>
            <button className={style.submit}>login</button>
         </div>
      </form>)
};

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
   const onSubmit = (formData) => {
      console.log(formData)
   }
   return (
      <div className={style.content}>
         <div className={style.header}>Wellcum</div>
         <LoginReduxForm onSubmit={onSubmit} />
      </div>)
}

export default Login;