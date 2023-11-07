import MyPosts from './MyPosts';
import { addPost, addPostThunk } from '../../../redux/profile_reducer.ts';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
   return {
      postData: state.profilePage.postData,
      info: state.me,
      newPostText: state.profilePage.newPostText,
      authorPhoto: state.profilePage.profile.photos.small,
      name: state.profilePage.profile.fullName
   }
};

const MyPostsContainer = connect(mapStateToProps, { addPost, addPostThunk })(MyPosts)

export default MyPostsContainer;
