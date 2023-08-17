import Dialogs from './Dialogs';
import { sendMessage, changeNewMessageText } from '../../redux/dialogs_reducer';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
   return {
      dialogs: state.dialogsPage,
      me: state.me,
   }
};

let mapDispatchToProps = (dispatch) => {
   return {
      changeMessageText: (text, id) => {
         dispatch(changeNewMessageText(text, id));
      },
      sendMessage: (id) => {
         dispatch(sendMessage(id));
      },
   }
};

export default compose(
   connect(mapStateToProps, mapDispatchToProps),
   withAuthRedirect,
)(Dialogs);
