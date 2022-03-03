import React from 'react';
import Password from './Password.jsx';


const PasswordsDisplay = props => (
  <div className="displayBox">
    <h3>All Passwords</h3>
    <div className="allPasswords">
      <Password/>
    </div>
  </div>
);

export default PasswordsDisplay;
