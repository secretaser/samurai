import React from 'react';
import Post from './Post/Post';
import style from './css/MyPosts.module.css';
import { addPostCreator, updateNewPostTextCreator } from '../../../redux/profile_reducer';

const MyPosts = (props) => {

   let posts = props.postData.map(p => <Post likes={p.likes} text={p.text} />);

   let addPost = () => {
      props.dispatch(addPostCreator());
   };

   let onChange = (e) => {
      let text = e.target.value;
      props.dispatch(updateNewPostTextCreator(text));
   };

   return (
      <div className={style.posts}>
         <h2>My posts</h2>
         <div className={style.posts__new}>

            <textarea className={style.posts__input} onChange={onChange} placeholder="Your news..." value={props.newPostText} />
            <button className={style.posts__button} onClick={addPost}>Post</button>

         </div>
         <div className={style.posts__wall}>

            {posts}

         </div>
      </div>
   )
}

export default MyPosts;