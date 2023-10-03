import style from './css/Post.module.css'
import like2 from './img/like2.png'
import ProfileDefPicSmall from './../../../../assets/images/profileicon.jpg';

const Post = (props) => {
   return (
      <div className={style.posts__post}>
         <div className={style.posts__pic}>
            <img src={props.authorPhoto || ProfileDefPicSmall} alt="" />
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