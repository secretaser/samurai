import { NavLink } from 'react-router-dom';
import style from './css/Dialogs__item.module.css';

const Dialogs__item = (props) => {
   let path = "/dialogs/" + props.id;
   return (
      <NavLink to={path} className={navData => navData.isActive ? style.itemActive : style.item}>
         <div className={style.ava}>
            <img src={props.avaLink} alt="" />
         </div>
         <div className={style.text}>
            <div className={style.name}>{props.name}</div>
            <div className={style.message_preview}>{props.lastMes}</div>
         </div>
      </NavLink>
   )
}

export default Dialogs__item;