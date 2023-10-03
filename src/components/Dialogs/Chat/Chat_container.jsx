import { connect } from 'react-redux';
import { sendMessageThunk } from '../../../redux/dialogs_reducer.ts';
import Chat from './Chat';

let mapStateToProps = (state, props) => {
   return {
      mesData: props.dialog.mesData,
      chat: props.dialog,
      me: props.me
   }
}

const Chat_container = connect(mapStateToProps, { sendMessageThunk })(Chat)
export default Chat_container;