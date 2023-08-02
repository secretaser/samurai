import Dialogs from './Dialogs';
import { sendMessageCreator, updateNewMessageTextCreator } from '../../redux/dialogs_reducer';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
   return {
      dialogs: state.dialogsPage,
      me: state.me,
   }
};

let mapDispatchToProps = (dispatch) => {
   return {
      changeMessageText: (text, id) => {
         dispatch(updateNewMessageTextCreator(text, id));
      },
      sendMessage: (id) => {
         dispatch(sendMessageCreator(id));
      },
   }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;

// const DialogsContainerOld = (props) => {

//    return <StoreContext.Consumer>
//       {
//          (store) => {

//             let sendMessage = (id) => {
//                props.store.dispatch(sendMessageCreator(id));
//             }
//             let changeMessageText = (text, id) => {
//                props.store.dispatch(updateNewMessageTextCreator(text, id));
//             }
//             let state = store.getState();
//             return (<Dialogs sendMessage={sendMessage} changeMessageText={changeMessageText}
//                dialogs={state.dialogsPage}
//                me={state.me} />
//             )
//          }
//       }
//    </StoreContext.Consumer>
// }