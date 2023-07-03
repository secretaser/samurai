import style from './../css/Sidebar.module.css'
import { NavLink } from 'react-router-dom';

const Sidebar_Item = (props) => {
   let path = `/${props.to}`;
   return (
      <NavLink to={path} className={style.item}>
         <div className={style.ava}>
            <img src={props.pic} alt="" />
         </div>
         <div className={style.name}>{props.name}</div>
      </NavLink>
   )
};

export default Sidebar_Item;