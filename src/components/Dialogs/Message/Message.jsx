import style from './css/Message.module.css';

const Message = (props) => {
   return (
      <div className={
         props.me == props.sender ? style.messageMy : style.messageOther}>{props.text}</div>
   )
}

export default Message;