import React from 'react';
import Post from './Post/Post';
import style from './css/MyPosts.module.css';

const MyPosts = (props) => {
   let posts = props.postData.map(p => <Post key={p.id} likes={p.likes} text={p.text} />);

   let onAddPost = () => {
      props.addPost();
   };

   let onPostChange = (e) => {
      let text = e.target.value;
      props.onChange(text);
   };

   return (
      <div className={style.posts}>
         <h2>My posts</h2>
         <div className={style.posts__new}>

            <textarea className={style.posts__input} onChange={onPostChange} placeholder="Your news..." value={props.newPostText} />
            <button className={style.posts__button} onClick={onAddPost}>Post</button>

         </div>
         <div className={style.posts__wall}>

            {posts}

         </div>
      </div>
   )
}

export default MyPosts;