import React from 'react';
import { connect } from 'react-redux';
import LabeledText from './LabeledText.jsx';

const mapStateToProps = state => (
  {
    totalPasswords: state.passwords.totalPasswords,
  }
)

const TotalsDisplay = (props) => (
  <div className="innerbox" id="totals">
    <h3>Totals Display</h3>
    <div>
      <LabeledText label="Total of Prop 1" text={props.totalPasswords}/>
    </div>
    <button id='sync' className="secondary">Action</button>
  </div>
);

export default connect(mapStateToProps, null)(TotalsDisplay);
