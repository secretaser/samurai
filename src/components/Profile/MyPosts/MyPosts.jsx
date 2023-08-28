import React from 'react';
import Post from './Post/Post';
import style from './css/MyPosts.module.css';
import NewPost from './NewPost';

const MyPosts = (props) => {

   console.log('render my posts');
   let posts = [...props.postData].reverse().map(p => <Post key={p.id} likes={p.likes} text={p.text} />);

   let addPost = (values) => {
      props.addPost(values.newPostBody);
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