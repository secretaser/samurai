import { Route, Routes } from "react-router-dom";
import './css/AppNew.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Feed from './components/Feed/Feed';
import Settings from './components/Settings/Settings';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import NavBarContainer from "./components/NavBar/NavBarContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";


const App = (props) => {

   return (

      <div className='appWrapper'>
         <div className="container">
            <HeaderContainer />
            <NavBarContainer />
            <div className="appWrapper_content">
               <Routes>
                  <Route path="/profile/:userId?" element={<ProfileContainer />} />
                  <Route path="/users/*" element={<UsersContainer />} />
                  <Route path="/dialogs/*" element={<DialogsContainer />} />
                  <Route path="/feed/*" element={<Feed />} />
                  <Route path="/settings/*" element={<Settings />} />
               </Routes>
            </div>

         </div>
      </div>
   );
}

export default App; 
