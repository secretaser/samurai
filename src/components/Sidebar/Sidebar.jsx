import style from './css/Sidebar.module.css'

const Sidebar = (props) => {
   return (
      <div className={style.container}>
         <div className={style.item}>
            <div className={style.ava}>
               <img src="" alt="" />
            </div>
            <div className={style.name}>Антоха</div>
         </div>
         <div className={style.item}>
            <div className={style.ava}>
               <img src="" alt="" />
            </div>
            <div className={style.name}>Антоха</div>
         </div>
         <div className={style.item}>
            <div className={style.ava}>
               <img src="" alt="" />
            </div>
            <div className={style.name}>Антоха</div>
         </div>

      </div>
   )
};

export default Sidebar;