import React from 'react';
//import LabeledText from './LabeledText.jsx';
const PasswordCreator = (props) => (
  <div>
    <div>
      <form onSubmit={console.log('you clicked me')}>
      <h3>Password</h3>
        <input
          id="new-pwid"
          placeholder="required"
          value={props.newPassword.pwid}
        />
        <button id='action-2' className="primary" type="submit">Save Password</button>
      </form>
    </div>
  </div>
);

export default PasswordCreator;
