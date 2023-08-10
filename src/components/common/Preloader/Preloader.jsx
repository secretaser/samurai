import style from './css/preloader.module.css';
import icon from './preloader.svg'

const Preloader = (props) => {
   return <div className={style.container}>
      <div className={style.picture}>
         <img src={icon} alt="" />
      </div>
   </div>
}

export default Preloader;