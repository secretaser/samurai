import axios from 'axios';
import ProfileDefPicSmall from '../../assets/images/ProfileDefPicSmall.jfif';
import style from './css/Users.module.css';
import React from 'react';

// const UsersOld = (props) => {

//    let getUsers = () => {
//       if (props.users.length === 0) {

//          axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
//             props.setUsers(response.data.items)
//          });
//       }

//       //    { 
//       // id: 0, 
//       // followed: true, 
//       // name: "Лёха", 
//       // surname: 'Бицепс', 
//       // status: 'Люблю сосать', 
//       // location: { 
//       //    country: 'Russia', 
//       //    city: 'Saint-P.' }, 
//       // avaLink: "https://animatornsk.ru/wp-content/uploads/2018/02/minions_PNG66.png" 
//       // },

//       // {
//       //    "name": "shms_",
//       //    "id": 29705,
//       //    "uniqueUrlName": null,
//       //    "photos": {
//       //      "small": null,
//       //      "large": null
//       //    },
//       //    "status": null,
//       //    "followed": false
//       //  },

//    };
//    return (

//       <div className={style.content}>

//          {
//             props.users.map(u => (<div key={u.id}>
//                <div className={style.user_container}>

//                   <div className={style.left}>
//                      <div className={style.image}>
//                         <img src={u.photos.small ?
//                            u.photos.small : ProfileDefPicSmall} alt="" />
//                      </div>
//                      {u.followed ?
//                         <button className={style.buttonDelete} onClick={() => { props.unfollow(u.id) }}>delete</button>
//                         : <button className={style.buttonAdd} onClick={() => { props.follow(u.id) }}>add</button>
//                      }

//                   </div>

//                   <div className={style.central}>
//                      <div className={style.name}>{u.name}</div>
//                      <div className={style.location}>
//                         {'u.location.city'}, {'u.location.country'}
//                      </div>
//                      <div className={style.status}>{u.status}</div>
//                   </div>

//                   <div className={style.actions}>
//                      <button className={style.buttonCome}>Зайти</button>
//                      <button className={style.buttonSmoke}>Покурить</button>
//                      <button className={style.buttonBother}>Доебаться</button>
//                   </div>
//                </div>
//             </div>))
//          }
//          <button className={style.getButton} onClick={getUsers}>Get more Users</button>
//       </div>
//    )
// }

class Users extends React.Component {
   componentDidMount() {
      axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
         this.props.setUsers(response.data.items)
      });
   }

   render() {
      return (
         <div className={style.content}>
            {
               this.props.users.map(u => (<div key={u.id}>
                  <div className={style.user_container}>

                     <div className={style.left}>
                        <div className={style.image}>
                           <img src={u.photos.small ?
                              u.photos.small : ProfileDefPicSmall} alt="" />
                        </div>
                        {u.followed ?
                           <button className={style.buttonDelete} onClick={() => { this.props.unfollow(u.id) }}>delete</button>
                           : <button className={style.buttonAdd} onClick={() => { this.props.follow(u.id) }}>add</button>
                        }
                     </div>

                     <div className={style.central}>
                        <div className={style.name}>{u.name}</div>
                        <div className={style.location}>
                           {'u.location.city'}, {'u.location.country'}
                        </div>
                        <div className={style.status}>{u.status}</div>
                     </div>

                     <div className={style.actions}>
                        <button className={style.buttonCome}>Зайти</button>
                        <button className={style.buttonSmoke}>Покурить</button>
                        <button className={style.buttonBother}>Доебаться</button>
                     </div>
                  </div>
               </div>))}

            <button className={style.getButton} onClick={this.getUsers}>Get more Users</button>
         </div>
      )
   }

}

export default Users;