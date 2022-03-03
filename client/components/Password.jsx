import React from 'react';
import LabeledText from './LabeledText.jsx';


const Password= (props) => (
  <div className="passwordBox">
    <h3>{props.account}</h3>
    <div>
      <LabeledText label="pwid" text={props.pwid} />
      <LabeledText label="account" text={props.account} />
      <LabeledText label="username" text={props.username} />
      <LabeledText label="alias" text={props.alias} />
      <LabeledText label="password" text={props.password} />
      <LabeledText label="uri" text={props.uri} />
      <LabeledText label="notes" text={props.notes} />
    </div>
    <div className="flex">
      <button className='action1'>Delete</button>
      <button className='action2'>Update</button>
    </div>
  </div>
);

export default Password;
