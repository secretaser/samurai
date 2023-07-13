import { Route, Routes } from "react-router-dom";
import './css/AppNew.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Feed from './components/Feed/Feed';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';


const App = (props) => {
   return (
      <div className='appWrapper'>
         <div className="container">
            <Header />
            <NavBar friends={props.state.navBarData} />
            <div className="appWrapper_content">
               <Routes>
                  <Route path="/dialogs/*" element={<Dialogs store={props.store} dialogs={props.state.dialogsPage} me={props.state.me} dispatch={props.dispatch} />} />
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
