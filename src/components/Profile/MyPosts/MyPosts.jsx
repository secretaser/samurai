import React, { useEffect } from 'react';
import Post from './Post/Post';
import style from './css/MyPosts.module.css';
import NewPost from './NewPost';

const MyPosts = (props) => {
   let posts = [...props.postData].reverse().map(p => <Post key={p.id} likes={p.likes} text={p.text} authorPhoto={props.authorPhoto} />);
   let textarea;
   useEffect(() => {
      window.addEventListener('input', handle)
      window.addEventListener('click', handle)
      return () => {
         window.removeEventListener('input', handle)
         window.removeEventListener('click', handle)
      };
   }, []);
   const handle = (e) => {
      if (e.target.className == style.posts__input) {
         textarea = e.target
         // let rows = e.target.innerHTML.split('\n').length
         // if (rows < 8) textarea.rows = rows
         textarea.style.height = 0 + 'px'
         textarea.style.height = textarea.scrollHeight + 2 + 'px'
         // console.log(textarea.wrap);
         // textarea.wrap = 'hard'
      }
      if (e.target.className == style.posts__button) {
         // textarea.rows = 1
         textarea.style.height = 0 + 'px'
      }
   }

   let addPost = (values) => {
      props.addPostThunk(values.newPostBody);
   };

   return (
      <div className={style.posts}>
         <h2>My posts</h2>
         <NewPost onSubmit={addPost} />
         <div className={style.posts__wall}>
            {posts}
         </div>
      </div>
   )
};

export default MyPosts;