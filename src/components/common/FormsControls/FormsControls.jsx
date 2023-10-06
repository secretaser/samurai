import { Field } from 'redux-form';
import style from './css/FormsControls.module.css'

export const FormControl = ({ input, meta, child, ...props }) => {
   const hasError = meta.touched && meta.error
   return (
      <div className={style.formControl + ' ' + (hasError ? style.error : '')} >

         {props.children}

         {hasError && <div className={style.errorMessage}>
            <span>{meta.error}</span>
         </div>}
      </div >
   )
};
export const FormControlWithNoError = ({ input, meta, child, ...props }) => {
   const hasError = meta.touched && meta.error
   return (
      <div className={style.formControl + ' ' + (hasError ? style.error : '')} >
         {props.children}
      </div >
   )
};


export const Textarea = (props) => {
   const { input, meta, child, ...restProps } = props;
   return <FormControlWithNoError {...props}><textarea {...input} {...restProps} /></FormControlWithNoError>
};
export const Input = (props) => {
   const { input, meta, child, ...restProps } = props;
   return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
};


export const InputAuth = ({ input, meta: { touched, error }, child, ...props }) => {
   const hasError = touched && error
   return (
      <div className={style.formControl + ' ' + (hasError ? style.error : '')} >

         <input {...input} {...props} />

         {hasError && <div className={style.errorMessageAuth}>
            <div>{error}</div>
         </div>}
      </div >
   )
}

export const createAuthField = (component, validators, placeholder, name, className, props = {}) => (<Field
   component={component}
   placeholder={placeholder}
   name={name}
   validate={validators}
   className={className}
   {...props} />)


export const InputInfo = (props) => {
   const { input, meta, child, ...restProps } = props;
   return <InfoFormControl {...props}><input {...input} {...restProps} /></InfoFormControl>
};

export const InfoFormControl = ({ input, meta, child, ...props }) => {
   const hasError = meta.touched && meta.error
   return (
      <div className={style.formControlInfo + ' ' + (hasError ? style.error : '')} >

         {props.children}

         {/* {hasError && <div className={style.errorMessage}>
               <span>{meta.error}</span>
            </div>} */}
      </div >
   )
};

export const createInfoField = (component, placeholder, name, className, props = {}) => {
   // debugger;
   return (<Field
      component={component}
      placeholder={placeholder}
      name={name}
      className={className}
      {...props} />)
}