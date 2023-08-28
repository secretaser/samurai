import { Field, reduxForm } from 'redux-form';
import style from './css/Login.module.css';
import { Input, InputAuth, createAuthField } from '../common/FormsControls/FormsControls';
import { required } from '../../utils/validators/validators';
import { connect } from 'react-redux';
import { login } from '../../redux/auth_reducer';
import { Navigate } from 'react-router-dom';


const LoginForm = ({ handleSubmit, error }) => {
   return (
      <form onSubmit={handleSubmit}
         className={style.form}>
         {createAuthField(InputAuth, [required], 'Email...', 'email', style.inputLogin)}
         {/* <Field
            component={InputAuth}
            validate={[required]}
            className={style.inputLogin}
            name={'email'}
            placeholder='Email...' /> */}
         <div className={style.inputPasswordContainer}>
            {createAuthField(InputAuth, [required], 'Password...', 'password', style.inputPassword, { type: "password" })}
            {/* <Field
               component={InputAuth}
               validate={[required]}
               className={style.inputPassword}
               name={'password'}
               type={"password"}
               placeholder='Password...' /> */}
         </div>
         <div className={style.inputRememberContainer}>
            <Field
               component={Input}
               className={style.inputRemember}
               name={'rememberMe'}
               type={"checkbox"} />
            <p>Remember me</p>
         </div>
         {error && <div className={style.summaryError}>{error}</div>}
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