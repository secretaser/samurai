import style from './css/FormsControls.module.css'

export const FormControl = ({ input, meta, child, ...props }) => {
   const hasError = meta.touched && meta.error
   return (
      <div className={style.formControl + ' ' + (hasError ? style.error : '')} >

         {props.children}

         {/* {hasError && <div className={style.errorMessage}>
            <span>{meta.error}</span>
         </div>} */}
      </div >
   )
};

export const Textarea = (props) => {
   const { input, meta, child, ...restProps } = props;
   return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
};
export const Input = (props) => {
   const { input, meta, child, ...restProps } = props;
   return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
};


export const InputAuth = ({ input, meta, child, ...props }) => {
   const hasError = meta.touched && meta.error
   return (
      <div className={style.formControl + ' ' + (hasError ? style.error : '')} >

         <input {...input} {...props} />

         {hasError && <div className={style.errorMessageAuth}>
            <div>{meta.error}</div>
         </div>}
      </div >
   )
}