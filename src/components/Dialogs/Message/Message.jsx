import style from './css/Message.module.css';


const Message = (props) => {
   return (
      <div className={style.message}>{props.text}</div>
   )
}

export default Message;