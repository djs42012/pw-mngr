import React from 'react';
//import LabeledText from './LabeledText.jsx';
const PasswordCreator = (props) => (
  <div>
    <div>
      <form onSubmit={console.log('hello')}>
      <h3>Create Password</h3>
      <div>
        <label>pwid</label>
          <input
            id="new-pwid"
            placeholder="required"
            onChange={(e) => {
              props.updateNewPassword(['pwid', parseInt(e.target.value)]);
            }}
          />
      </div>
      <div>
        <label>account</label>
          <input
            id="new-account"
            placeholder="required"
            onChange={(e) => {
              props.newPassword.account = e.target.value;
            }}
          />
      </div>
      <div>
        <label>username</label>
          <input
            id="new-username"
            placeholder="required"
            onChange={(e) => {
              props.newPassword.username = e.target.value;
            }}
          />
      </div>
      <div>
        <label>alias</label>
          <input
            id="new-alias"
            placeholder=""
            onChange={(e) => {
              props.newPassword.alias = e.target.value;
            }}
          />
      </div>
      <div>
        <label>password</label>
          <input
            id="new-password"
            placeholder="required"
            onChange={(e) => {
              props.newPassword.password = e.target.value;
            }}
          />
      </div>
      <div>
        <label>uri</label>
          <input
            id="new-uri"
            placeholder=""
            onChange={(e) => {
              props.newPassword.uri = e.target.value;
            }}
          />
      </div>
      <div>
        <label>notes</label>
          <input
            id="new-notes"
            placeholder=""
            onChange={(e) => {
              props.newPassword.notes = e.target.value;
            }}
          />
      </div>
        <button id='save-new-password' className="primary" type="submit">Save Password</button>
      </form>
    </div>
  </div>
);

export default PasswordCreator;
