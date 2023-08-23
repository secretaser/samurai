import MyPosts from './MyPosts';
import { addPost } from '../../../redux/profile_reducer';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
   return {
      postData: state.profilePage.postData,
      info: state.me,
      newPostText: state.profilePage.newPostText,
   }
};

const MyPostsContainer = connect(mapStateToProps, { addPost })(MyPosts)

export default MyPostsContainer;
