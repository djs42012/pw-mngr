import React from 'react';
import TotalsDisplay from '../components/TotalsDisplay.jsx';
import PasswordsContainer from './PasswordsContainer.jsx';
//import * as actions from '../actions/actions.js';
//import { connect } from 'react-redux';
 

 
 const MainContainer = () => (
   <div className="mainContainer">
     <h2>Main Container</h2>
     <div className="outerBox">
       <PasswordsContainer />
     </div>
   </div>
 );
 
 export default MainContainer;
 