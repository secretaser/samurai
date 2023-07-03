import style from './css/Message.module.css';


const Message = (props) => {
   // debugger;
   return (
      <div className={
         props.me.id == props.sender ? style.messageMy : style.messageOther}>{props.text}</div>
   )
}

export default Message;