import style from './css/Header.module.css';

const Header = () => {
   return (
      <header className={style.header}>
         <div className={style.header__item}>
            <div className={style.header__logo}>
               <img src="https://cdn-icons-png.flaticon.com/512/4132/4132666.png" alt="" />
            </div>
            <div className={style.header__head}><a href="#">wassup</a></div>
         </div>
      </header>
   )
}

export default Header;