import stylePosts from './css/MyPosts.module.css'
import stylePost from './Post/css/Post.module.css'

const MyPostsContainerLoading = () => {

   let posts = [];

   for (let i = 0; i < 5; i++) {
      posts[i] = <div className={stylePost.posts__post}>
         <div className={stylePost.loading__pic}>
         </div>

         <div className={stylePost.loading__posttext}>
         </div>
      </div>;

   }
   return (
      <div className={stylePosts.posts}>
         <div className={stylePosts.loading__header}></div>

         <div className={stylePosts.loading__container}>
            <div className={stylePosts.loading__newPost}></div>
            <div className={stylePosts.loading__button}></div>
         </div>
         <div className={stylePosts.posts__wall}>
            {posts}
         </div>
      </div>
   )
}

export default MyPostsContainerLoading;
