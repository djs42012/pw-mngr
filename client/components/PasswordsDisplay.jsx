import React from 'react';
import Password from './Password.jsx';


const PasswordsDisplay = props => {
  const passwords = [];
  for (let i = 0; i < props.passwordList.length; i++){
    passwords.push(
      <Password
        pwid = {props.passwordList[i].pwid}
        account = {props.passwordList[i].account}
        username = {props.passwordList[i].username}
        alias = {props.passwordList[i].alias}
        password = {props.passwordList[i].password}
        uri = {props.passwordList[i].uri}
        notes = {props.passwordList[i].notes}
      />
    );
  }
  return (
    <div className="displayBox">
      <h3>All Passwords</h3>
      <div className="allPasswords">
        {passwords}
      </div>
    </div>
  );
};

export default PasswordsDisplay;
