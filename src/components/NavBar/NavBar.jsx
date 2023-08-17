import { NavLink } from 'react-router-dom';
import style from './css/NavBar.module.css';
import Sidebar from './Sidebar/Sidebar';

const NavBar = (props) => {
   return (
      <div className={style.container}>
         <nav className={style.navigation}>
            <div className={style.navigation__item}><NavLink to={`/profile/${props.myId}`} className={navData => navData.isActive ? style.activeLink : style.navigation__link}>My profile</NavLink></div>
            <div className={style.navigation__item}><NavLink to={`/profile/2`} className={navData => navData.isActive ? style.activeLink : style.navigation__link}>Dimych</NavLink></div>
            <div className={style.navigation__item}><NavLink to="/users" className={navData => navData.isActive ? style.activeLink : style.navigation__link}>Users</NavLink></div>
            <div className={style.navigation__item}><NavLink to="/dialogs" className={navData => navData.isActive ? style.activeLink : style.navigation__link}>Messages</NavLink></div>
            <div className={style.navigation__item}><NavLink to="/feed" className={navData => navData.isActive ? style.activeLink : style.navigation__link}>Feed</NavLink></div>
            <div className={style.navigation__item}><NavLink to="/settings" className={navData => navData.isActive ? style.activeLink : style.navigation__link}>Settings</NavLink></div>
         </nav>
         <Sidebar friends={props.friends} />
      </div>
   )
};

export default NavBar;