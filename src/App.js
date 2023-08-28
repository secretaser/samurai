import { Route, Routes } from "react-router-dom";
import './css/AppNew.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Feed from './components/Feed/Feed';
import Settings from './components/Settings/Settings';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import NavBarContainer from "./components/NavBar/NavBarContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Login from "./components/Login/Login";
import React from "react";
import { getAuthData } from "./redux/auth_reducer";
import { connect } from "react-redux";
import { compose } from "redux";
import { initializeApp } from "./redux/app_reducer";
import Preloader from "./components/common/Preloader/Preloader";


<<<<<<< HEAD
class App extends React.Component {

   componentDidMount() {
      this.props.initializeApp();
   };

   render() {
      if (!this.props.initialized) {
         return <Preloader />
      }
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
                     <Route path="/login/*" element={<Login />} />
                  </Routes>
               </div>
=======
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
>>>>>>> 5c0e6869ff15682da91c38fa3111f9977f394917

            </div>
         </div>
<<<<<<< HEAD
      );
   }
=======
      </div>
   );

>>>>>>> 5c0e6869ff15682da91c38fa3111f9977f394917
}

const mapStateToProps = (state) => ({
   initialized: state.app.initialized,
})

export default compose(
   connect(mapStateToProps, {
      getAuthData,
      initializeApp
   })
)
   (App);