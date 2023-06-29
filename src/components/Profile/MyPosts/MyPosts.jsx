import Post from './Post/Post';
import style from './css/MyPosts.module.css';

const MyPosts = () => {

   let postData = [
      { id: 0, likes: 0, text: 'Федук гавно' },
      { id: 1, likes: 226, text: 'Идем с братвой раздавать федуку по ебалу' },
      { id: 2, likes: 1653, text: 'Нам Элджей сдал его адрес и попросил сказать, что его ждет назад тыкать в зад тыкать в зад' },
      { id: 3, likes: 1488, text: 'Мой дисс гавно с не самыми красивыми рифмами' },
   ];

   let posts = postData
      .map(p => <Post likes={p.likes} text={p.text} />);

   return (
      <div className={style.posts}>
         <h2>My posts</h2>
         <div className={style.posts__new}>
            <textarea className={style.posts__input} placeholder="Your news..." />
            <button className={style.posts__button}>Post</button>
         </div>
         <div className={style.posts__wall}>
            {posts}

         </div>
      </div>
   )
}

export default MyPosts;