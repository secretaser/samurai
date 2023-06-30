import { NavLink } from 'react-router-dom';
import style from './css/NavBar.module.css';
import Sidebar from '../Sidebar/Sidebar';


const NavBar = () => {
   return (
      <div className={style.container}>
         <nav className={style.navigation}>
            <div className={style.navigation__item}><NavLink to="/profile" className={navData => navData.isActive ? style.activeLink : style.navigation__link}>Profile</NavLink></div>
            <div className={style.navigation__item}><NavLink to="/dialogs" className={navData => navData.isActive ? style.activeLink : style.navigation__link}>Messages</NavLink></div>
            <div className={style.navigation__item}><NavLink to="/feed" className={navData => navData.isActive ? style.activeLink : style.navigation__link}>Feed</NavLink></div>
            <div className={style.navigation__item}><NavLink to="/music" className={navData => navData.isActive ? style.activeLink : style.navigation__link}>Music</NavLink></div>
            <div className={style.navigation__item}><NavLink to="/settings" className={navData => navData.isActive ? style.activeLink : style.navigation__link}>Settings</NavLink></div>
         </nav>
         <Sidebar />
      </div>
   )
};

export default NavBar;