import React, { useEffect } from 'react';
import Post from './Post/Post';
import style from './css/MyPosts.module.css';
import NewPost from './NewPost';

const MyPosts = (props) => {
   let posts = [...props.postData].reverse().map(p => <Post key={p.id} likes={p.likes} text={p.text} authorPhoto={props.authorPhoto} />);

   let addPost = (values) => {
      if (values.newPostBody.trim()) {
         props.addPostThunk(values.newPostBody.trim());
      }
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