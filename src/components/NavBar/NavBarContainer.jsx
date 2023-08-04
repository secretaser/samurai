import NavBar from './NavBar';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
   return {
      friends: state.navBarData,
   }
};
const mapDispatchToProps = (dispatch) => {
   return {};
}

const NavBarContainer = connect(mapStateToProps, mapDispatchToProps)(NavBar);

export default NavBarContainer;