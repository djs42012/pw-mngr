 import React from 'react';
 import PasswordsDisplay from '../components/PasswordsDisplay.jsx';
 import TotalsDisplay from '../components/TotalsDisplay.jsx'
 import PasswordCreator from '../components/PasswordCreator.jsx';
 import { connect } from 'react-redux';
 import * as actions from '../actions/actions.js';
 
const mapStateToProps = state => ({
  passwordList: state.passwords.passwordList,
  totalPasswords: state.passwords.totalPasswords,
  newPassword: state.passwords.newPassword,
});

const mapDispatchToProps = dispatch => ({
  updateNewPassword: updateKeyArray => dispatch(actions.updateNewPassword(updateKeyArray)),
  createPassword: password => dispatch(actions.createPassword(password)),
});

 const PasswordsContainer = (props) => (
   <div className="innerbox">
     <div>
      <TotalsDisplay 
        totalPasswords={props.totalPasswords} 
      />
      <PasswordCreator
        createPassword={props.createPassword}
        updateNewPassword={props.updateNewPassword}
        newPassword={props.newPassword}
      />
      <PasswordsDisplay 
        passwordList={props.passwordList}/>
     </div>
   </div>
 );
 
 export default connect(mapStateToProps, mapDispatchToProps)(PasswordsContainer);
 