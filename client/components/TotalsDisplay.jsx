import React from 'react';
import LabeledText from './LabeledText.jsx';

const TotalsDisplay = props => {
  return (
  <div className="innerbox" id="totals">
    <LabeledText label="Total Passwords" text={props.totalPasswords}/>
  </div>
  );
};

export default TotalsDisplay;
