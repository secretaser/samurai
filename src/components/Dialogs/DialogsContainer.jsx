import Dialogs from './Dialogs';
import { sendMessage } from '../../redux/dialogs_reducer.ts';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
   return {
      dialogs: state.dialogsPage,
      me: state.auth.userId,
   }
};

export default compose(
   withAuthRedirect,
   connect(mapStateToProps, { sendMessage }),
)(Dialogs);