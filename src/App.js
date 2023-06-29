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

const App = () => {
   return (
      <BrowserRouter>
         <div className='appWrapper'>
            <div className="appWrapper_content">
               <div className="container">
                  <Header />
                  <NavBar />

                  <Routes>
                     <Route path="/dialogs/*" element={<Dialogs />} />
                     <Route path="/profile/*" element={<Profile />} />
                     <Route path="/feed/*" element={<Feed />} />
                     <Route path="/music/*" element={<Music />} />
                     <Route path="/settings/*" element={<Settings />} />
                  </Routes>

               </div>
            </div>
         </div>
      </BrowserRouter>
   );
}

export default App; 
