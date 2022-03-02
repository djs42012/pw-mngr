 import React from 'react';
 import PasswordCreator from '../components/PasswordCreator.jsx';
 import PasswordsDisplay from '../components/PasswordsDisplay.jsx';
 //import { connect } from 'react-redux';
 //import { bindActionCreators } from 'redux';
 //import * as actions from '../actions/actions.js';
 


 const PasswordsContainer = () => (
   <div className="innerbox">
     <h3>Passwords Container</h3>
     <div>
      <PasswordCreator/>
      <PasswordsDisplay/>
     </div>
   </div>
 );
 
 export default PasswordsContainer;
 