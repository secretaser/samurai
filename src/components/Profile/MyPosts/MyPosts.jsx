import Post from './Post/Post';
import style from './css/MyPosts.module.css';

const MyPosts = (props) => {

   let posts = props.postData.map(p => <Post likes={p.likes} text={p.text} />);

   return (
      <div className={style.posts}>
         <h2>My posts</h2>
         <div className={style.posts__new}>
            <textarea className={style.posts__input} placeholder="Your news..." />
            <button className={style.posts__button}>Post</button>
         </div>
         <div className={style.posts__wall}>
            {posts}

         </div>
      </div>
   )
}

export default MyPosts;