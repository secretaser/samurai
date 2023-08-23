import style from './css/Header.module.css';
import { NavLink } from 'react-router-dom';
import logoutIcon from '../../assets/images/logoutIcon.png'

const Header = (props) => {
   return (
      <header className={style.header}>
         <div className={style.header__item}>
            <div className={style.header__logo}>
               <img src="https://cdn-icons-png.flaticon.com/512/4132/4132666.png" alt="" />
            </div>
            <div className={style.header__head}><a href="#">wassup</a></div>
         </div>
         <div className={style.header__item}>
            <div className={style.header__loginBlock}>
               {props.isAuth ?
                  <div className={style.logged}>
                     <NavLink className={style.logged__login} to={`/profile/${props.userId}`}>{props.login}</NavLink><button className={style.logged__icon} onClick={props.logout}><img src='https://cdn-icons-png.flaticon.com/512/152/152534.png' alt="" /></button>
                     <NavLink className={style.logged__pic} to={`/profile/${props.userId}`}><img src={props.ava} alt="" /></NavLink></div>
                  :
                  <NavLink to={'/login'}>Login</NavLink>}
            </div>
         </div>
      </header>
   )
}

export default Header;