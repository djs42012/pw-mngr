 import React from 'react';
 import PasswordCreator from '../components/PasswordCreator.jsx';
 import PasswordsDisplay from '../components/PasswordsDisplay.jsx';
 import TotalsDisplay from '../components/TotalsDisplay.jsx'
 import { connect } from 'react-redux';
 import * as actions from '../actions/actions.js';
 
const mapStateToProps = state => ({
  totalPasswords: state.passwords.totalPasswords,
  passwordList: state.passwords.passwordList,
  newPassword: state.passwords.newPassword,
});

const mapDispatchToProps = dispatch => ({
  loadPasswords : () => actions.loadPasswords(dispatch),
  updateNewPassword: (updateKeyArray) => {dispatch(actions.updateNewPassword(updateKeyArray))},
  createPassword: (password) => {actions.createPassword(dispatch, password)}
  });

 const PasswordsContainer = (props) => (
   <div className="innerbox">
     <div>
      <TotalsDisplay 
        totalPasswords={props.totalPasswords} 
        loadPasswords={props.loadPasswords} 
      />
      <PasswordCreator
        newPassword={props.newPassword}
        updateNewPassword={props.updateNewPassword}
        createPassword={props.createPassword}
      />
      <PasswordsDisplay 
        passwordList={props.passwordList}/>
     </div>
   </div>
 );
 
 export default connect(mapStateToProps, mapDispatchToProps)(PasswordsContainer);
 