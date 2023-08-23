import { Field, reduxForm } from 'redux-form';
import style from './css/Login.module.css';
import { Input, InputAuth } from '../common/FormsControls/FormsControls';
import { required } from '../../utils/validators/validators';
import { connect } from 'react-redux';
import { login } from '../../redux/auth_reducer';
import { Navigate } from 'react-router-dom';


const LoginForm = (props) => {
   return (
      <form onSubmit={props.handleSubmit}
         className={style.form}>
         <div className={style.inputLoginContainer}>
            <Field
               validate={[required]}
               className={style.inputLogin} name={'email'} component={InputAuth} placeholder='Email...' />
         </div>
         <div className={style.inputPasswordContainer}>
            <Field
               validate={[required]}
               className={style.inputPassword} name={'password'} component={InputAuth} type={"password"} placeholder='Password...' />
         </div>
         <div className={style.inputRememberContainer}>
            <Field className={style.inputRemember} name={'rememberMe'} component={Input} type={"checkbox"} />
            <p>Remember me</p>
         </div>
         {props.error && <div className={style.summaryError}>{props.error}</div>}
         <div className={style.submitContainer}>
            <button className={style.submit}>login</button>
         </div>
      </form>)
};

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {

   const onSubmit = (formData) => {
      console.log(formData);
      props.login(formData.email, formData.password, formData.rememberMe)
   }

   if (props.isAuth) {
      return <Navigate to={`/profile/${props.userId}`} />
   }
   return (
      <div className={style.content}>
         <div className={style.header}>Wellcum</div>
         <LoginReduxForm onSubmit={onSubmit} />
      </div>)
}

const mapStateToProps = (state) => ({
   isAuth: state.auth.isAuth,
   userId: state.auth.userId,
})

export default connect(mapStateToProps, { login })(Login);