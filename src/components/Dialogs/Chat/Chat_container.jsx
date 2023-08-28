import { connect } from 'react-redux';
import { sendMessage } from '../../../redux/dialogs_reducer';
import Chat from './Chat';

let mapStateToProps = (state, props) => {
   return {
      mesData: props.dialog.mesData,
      chat: props.dialog,
      me: props.me
   }
}

const Chat_container = connect(mapStateToProps, { sendMessage })(Chat)
export default Chat_container;