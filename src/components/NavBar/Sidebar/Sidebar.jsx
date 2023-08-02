import Sidebar_Item from './Sidebar_Item/Sidebar_Item';
import style from './css/Sidebar.module.css';

const Sidebar = (props) => {
   // debugger;
   let friends = props.friends.friendsList.map(f => <Sidebar_Item key={f.id} to={f.id} name={f.name} pic={f.avaLink} />);
   return (
      <div className={style.container}>
         {friends}
      </div>
   )
};

export default Sidebar;