import React from 'react';
import style from './css/Profile__Info.module.css';
import { compose } from 'redux';
import { connect } from 'react-redux';

class ProfileStatus extends React.Component {

   state = {
      editMode: false,
      status: this.props.status,
   }

   activateEditMode = () => {
      this.setState({
         editMode: true,
         status: this.props.status
      });
   };
   deactivateEditMode = () => {
      this.setState({
         editMode: false,
      });
      if (this.state.status !== this.props.status) {
         this.props.updateStatus(this.state.status);
      }
   };

   onStatusChange = (e) => {
      this.setState({
         status: e.currentTarget.value
      })
   };

   componentDidUpdate(prevProps, prevState) {
      if (prevProps.status !== this.props.status) {
         this.setState({
            status: this.props.status
         })
      }
      console.log('statusDidUpdate');
   }

   render() {
      return (
         <div className={style.status}>
            {this.state.editMode ?
               <div className={style.status__inputContainer}>
                  <input placeholder='How are you today?' autoFocus onChange={this.onStatusChange} onBlur={this.deactivateEditMode} value={this.state.status} />
               </div> :
               <span onClick={this.activateEditMode} className={style.status__text}>{this.props.status || 'How are you today?'}</span>
            }
         </div>
      )
   };
};

let mapStateToProps = (state) => {
   return {
      info: state.me,
      profile: state.profilePage.profile
   }
};

compose(
   connect(mapStateToProps, null)
)
   (ProfileStatus)

export default ProfileStatus