import React from 'react';
import TotalsDisplay from '../components/TotalsDisplay.jsx';
import PasswordsContainer from './PasswordsContainer.jsx';
//import * as actions from '../actions/actions.js';
//import { connect } from 'react-redux';
 

 
 const MainContainer = () => (
   <div className="mainContainer">
     <div className="outerBox">
       <h1>pw-mngr</h1>
       <PasswordsContainer />
     </div>
   </div>
 );
 
 export default MainContainer;
 