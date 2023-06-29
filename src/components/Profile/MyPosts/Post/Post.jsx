import style from './css/Post.module.css'
import like1 from './img/like1.png'
import like2 from './img/like2.png'

const Post = (props) => {
   return (
      <div className={style.posts__post}>
         <div className={style.posts__pic}>
            <img src="#" alt="" />
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