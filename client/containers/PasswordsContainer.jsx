 import React from 'react';
 import PasswordCreator from '../components/PasswordCreator.jsx';
 import PasswordsDisplay from '../components/PasswordsDisplay.jsx';
 import TotalsDisplay from '../components/TotalsDisplay.jsx'
 import { connect } from 'react-redux';
 import * as actions from '../actions/actions.js';
 
const mapStateToProps = state => ({
  totalPasswords: state.passwords.totalPasswords,
  passwordsList: state.passwords.passwordsList,
});

const mapDispatchToProps = dispatch => ({
loadPasswords : () => actions.loadPasswords(dispatch),
});

 const PasswordsContainer = (props) => (
   <div className="innerbox">
     <h3>Passwords Container</h3>
     <div>
      <TotalsDisplay totalPasswords={props.totalPasswords} loadPasswords={props.loadPasswords} />
      <PasswordCreator/>
      <PasswordsDisplay/>
     </div>
   </div>
 );
 
 export default connect(mapStateToProps, mapDispatchToProps)(PasswordsContainer);
 