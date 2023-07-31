import { BrowserRouter, Route, Routes } from "react-router-dom";
import logo from './logo.svg';
import './css/AppNew.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Feed from './components/Feed/Feed';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from "./components/Dialogs/DialogsContainer";


const App = (props) => {
   return (

      <div className='appWrapper'>
         <div className="container">
            <Header />
            {/* <NavBar /> */}
            <NavBar friends={props.state.navBarData} me={props.state.me} />
            <div className="appWrapper_content">
               <Routes>
                  {/* <Route path="/dialogs/*" element={<DialogsContainer />} />
                  <Route path="/profile/*" element={<Profile />} /> */}
                  <Route path="/dialogs/*" element={<DialogsContainer store={props.store} />} />
                  <Route path="/profile/*" element={<Profile store={props.store} />} />

                  <Route path="/feed/*" element={<Feed />} />
                  <Route path="/music/*" element={<Music />} />
                  <Route path="/settings/*" element={<Settings />} />
               </Routes>
            </div>

         </div>
      </div>
   );
}

export default App; 
