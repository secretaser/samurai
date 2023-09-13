import { Field, reduxForm } from 'redux-form';
import style from './css/Login.module.css';
import { Input, InputAuth, createAuthField } from '../common/FormsControls/FormsControls';
import { required } from '../../utils/validators/validators';
import { connect } from 'react-redux';
import { login } from '../../redux/auth_reducer';
import { Navigate } from 'react-router-dom';
import { useState } from 'react';


const LoginForm = ({ handleSubmit, error, captchaUrl }) => {

   let [check, setCheck] = useState(false)
   return (
      <form onSubmit={handleSubmit} className={style.form}>
         {createAuthField(InputAuth, [required], 'Email...', 'email', style.inputLogin)}
         {createAuthField(InputAuth, [required], 'Password...', 'password', style.inputPassword, { type: "password" })}

         {captchaUrl &&
            <div className={style.captchaContainer}>
               <div className={style.imageContainer}>
                  <img src={captchaUrl} alt="" />
               </div>
               {createAuthField(InputAuth, [required], 'Are you a robot???', 'captcha', style.inputCaptcha)}
            </div>
         }

         <div onClick={() => setCheck(!check)} className={check ? style.info__lookingActive : style.info__looking}>
            {createAuthField(InputAuth, [], null, 'rememberMe', style.info__checkbox, { type: 'checkbox' })}
            <label for='rememberMe'>Remember me</label>
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
      props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
   }

   if (props.isAuth) {
      return <Navigate to={`/profile/${props.userId}`} />
   }
   return (
      <div className={style.content}>
         <div className={style.header}>Wellcum</div>
         <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
      </div>)
}

const mapStateToProps = (state) => ({
   isAuth: state.auth.isAuth,
   userId: state.auth.userId,
   captchaUrl: state.auth.captchaUrl,
})

export default connect(mapStateToProps, { login })(Login);