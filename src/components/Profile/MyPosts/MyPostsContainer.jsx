import MyPosts from './MyPosts';
import { addPostCreator, updateNewPostTextCreator } from '../../../redux/profile_reducer';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
   return {
      postData: state.profilePage.postData,
      info: state.me,
      newPostText: state.profilePage.newPostText,
   }
};
const mapDispatchToProps = (dispatch) => {
   return {
      addPost: () => {
         dispatch(addPostCreator());
      },
      onChange: (text) => {
         dispatch(updateNewPostTextCreator(text));
      },
   }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;


// const MyPostsContainerOld = (props) => {

//    return <StoreContext.Consumer>
//       {
//          (store) => {
//             let addPost = () => {
//                store.dispatch(addPostCreator());
//             };

//             let onChange = (text) => {
//                store.dispatch(updateNewPostTextCreator(text));
//             };
//             let state = store.getState();
//             return (
//                <MyPosts updateNewPostText={onChange} addPost={addPost}
//                   postData={state.profilePage.postData}
//                   info={state.me}
//                   newPostText={state.profilePage.newPostText} />
//             )
//          }
//       }
//    </StoreContext.Consumer>
// }