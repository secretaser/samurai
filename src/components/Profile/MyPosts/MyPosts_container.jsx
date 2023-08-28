import { addPostCreator, updateNewPostTextCreator } from '../../../redux/profile_reducer';
import MyPosts from './MyPosts';

const MyPosts_container = (props) => {
   let addPost = () => {
      props.store.dispatch(addPostCreator());
   };

   let onChange = (text) => {
      props.store.dispatch(updateNewPostTextCreator(text));
   };

   return (
      <MyPosts addPost={addPost}
         updateNewPostText={onChange}
         postData={props.store.getState().profilePage.postData}
         newPostText={props.store.getState().profilePage.newPostText} />
   )
}

export default MyPosts_container;