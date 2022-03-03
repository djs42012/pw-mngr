import React from 'react';

const LabeledText = ({ label, text }) => (
  <div>
    <p>
      <strong>{`${label}: `}</strong>
      {text}
    </p>
  </div>
);

export default LabeledText;
