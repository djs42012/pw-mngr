import React from 'react';
import { useEffect } from 'react';
import LabeledText from './LabeledText.jsx';




const TotalsDisplay = props => {
  
  useEffect(() => {
    props.loadPasswords()
  }, [])

  return (
  <div className="innerbox" id="totals">
    <h3>Totals Display</h3>
    <div>
      <LabeledText label="Total Passwords" text={props.totalPasswords}/>
    </div>
  </div>
  );
};

export default TotalsDisplay;
