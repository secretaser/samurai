import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import './css/AppNew.css';
import HeaderContainer from './components/Header/HeaderContainer';
import NavBarContainer from "./components/NavBar/NavBarContainer";
import React from "react";
import { getAuthData } from "./redux/auth_reducer";
import { Provider, connect } from "react-redux";
import { compose } from "redux";
import { initializeApp } from "./redux/app_reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from './redux/redux_store';
import { lazy, Suspense } from "react";

const ProfileContainer = lazy(() => import("./components/Profile/ProfileContainer"))
const UsersContainer = lazy(() => import("./components/Users/UsersContainer"))
const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'))
const Login = lazy(() => import('./components/Login/Login'))
const Feed = lazy(() => import('./components/Feed/Feed'))
const Settings = lazy(() => import('./components/Settings/Settings'))

class App extends React.Component {

   catchAllUnhandledErrors = (reason, PromiseRejectionEvent) => {
      // alert('some error');
      console.log(PromiseRejectionEvent);
   }

   componentDidMount() {
      this.props.initializeApp();
      window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors);
   };

   componentWillUnmount() {
      window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors);
   }
   render() {
      if (!this.props.initialized) {
         return <Preloader />
      }
      return (
         <div className='appWrapper'>
            <div className="container">
               <HeaderContainer />
               <NavBarContainer />
               <Suspense fallback={<Preloader />}>
                  <div className="appWrapper_content">
                     <Routes>
                        <Route path="/profile/:userId?" element={<ProfileContainer />} />
                        <Route path="/users/*" element={<UsersContainer />} />
                        <Route path="/dialogs/*" element={<DialogsContainer />} />
                        <Route path="/feed/*" element={<Feed />} />
                        <Route path="/settings/*" element={<Settings />} />
                        <Route path="/login/*" element={<Login />} />
                        <Route path="/" element={<Navigate to="/profile" />} />
                        {/* <Route path="/" element={<Navigate to='/profile' />} /> */}
                     </Routes>
                  </div>
               </Suspense>

            </div>
         </div>
      );
   }
}

const mapStateToProps = (state) => ({
   initialized: state.app.initialized,
})

let AppContainer = compose(
   connect(mapStateToProps, {
      getAuthData,
      initializeApp
   })
)(App);

const SamuraiApp = (props) => {
   return (
      <HashRouter>
         <Provider store={store}>
            <AppContainer />
         </Provider>
      </HashRouter>)
}

export default SamuraiApp;