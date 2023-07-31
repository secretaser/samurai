import React from 'react';
import { addPostCreator, updateNewPostTextCreator } from '../../../redux/profile_reducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
   // debugger;
   let addPost = () => {
      props.store.dispatch(addPostCreator());
   };

   let onChange = (text) => {
      props.store.dispatch(updateNewPostTextCreator(text));
   };

   return (<MyPosts updateNewPostText={onChange} addPost={addPost}
      postData={props.store.getState().profilePage.postData}
      info={props.store.getState().me}
      newPostText={props.store.getState().profilePage.newPostText} />)
}

export default MyPostsContainer;