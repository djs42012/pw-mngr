import React from 'react';
//import { useEffect } from 'react';
import { connect } from 'react-redux';
import LabeledText from './LabeledText.jsx';
import * as actions from '../actions/actions';


// useEffect(() => {
//   actions.loadPasswords()
// }, []);


const TotalsDisplay = (props) => (
  <div className="innerbox" id="totals">
    <h3>Totals Display</h3>
    <div>
      <LabeledText label="Total Passwords" text={props.totalPasswords}/>
    </div>
    <button id='sync' className="secondary" onClick={props.loadPasswords}>Load Passwords</button>
  </div>
);

export default TotalsDisplay;
