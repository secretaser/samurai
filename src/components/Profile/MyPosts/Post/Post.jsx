import style from './css/Post.module.css'
import like2 from './img/like2.png'

const Post = (props) => {
   const setBg = () => {
      let num = 0;
      for (let i = 0; i < props.name.length; i++) {
         num += props.name.charCodeAt(i) / (props.name.length * 120);
      }
      return Math.floor(num * 4000).toString(16);
   }
   return (
      <div className={style.posts__post}>
         <div className={style.posts__pic}>
            {props.authorPhoto ? <img src={props.authorPhoto} alt="" /> :
               <svg xmlns="http://www.w3.org/2000/svg" fill={'#' + setBg()} viewBox="0 0 24 24" width="24" height="24"><path d="M12,12A6,6,0,1,0,6,6,6.006,6.006,0,0,0,12,12ZM12,2A4,4,0,1,1,8,6,4,4,0,0,1,12,2Z" /><path d="M12,14a9.01,9.01,0,0,0-9,9,1,1,0,0,0,2,0,7,7,0,0,1,14,0,1,1,0,0,0,2,0A9.01,9.01,0,0,0,12,14Z" /></svg>}
         </div>

         <div className={style.posts__posttext}>
            <p>{props.text}</p>
         </div>

         <div className={style.posts__likes}>
            <div className={style.posts__like}>
               <button>
                  <img src={like2} alt="" />
               </button>
            </div>
            <div className={style.posts__count}>{props.likes}</div>
         </div>
      </div>
   )
}

export default Post;