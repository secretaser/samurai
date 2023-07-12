import React from 'react';
import Post from './Post/Post';
import style from './css/MyPosts.module.css';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/state';

const MyPosts = (props) => {

   let posts = props.postData.map(p => <Post likes={p.likes} text={p.text} />);

   let newPostElement = React.createRef();

   let addPost = () => {
      props.dispatch(addPostActionCreator());
      props.dispatch(updateNewPostTextActionCreator(''));
   };

   let onChange = () => {
      let text = newPostElement.current.value;
      props.dispatch(updateNewPostTextActionCreator(text));
   };

   return (
      <div className={style.posts}>
         <h2>My posts</h2>
         <div className={style.posts__new}>

            <textarea className={style.posts__input} onChange={onChange} ref={newPostElement} placeholder="Your news..." value={props.newPostText} />
            <button className={style.posts__button} onClick={addPost}>Post</button>

         </div>
         <div className={style.posts__wall}>

            {posts}

         </div>
      </div>
   )
}

export default MyPosts;