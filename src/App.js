import { Route, Routes } from "react-router-dom";
import './css/AppNew.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Feed from './components/Feed/Feed';
import Settings from './components/Settings/Settings';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import NavBarContainer from "./components/NavBar/NavBarContainer";


const App = (props) => {

   return (

      <div className='appWrapper'>
         <div className="container">
            <Header />
            <NavBarContainer />
            <div className="appWrapper_content">
               <Routes>
                  <Route path="/profile/*" element={<Profile />} />
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
