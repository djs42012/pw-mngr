import React from 'react';

const PasswordCreator = () => (
  <div>
    <div>
      <form onSubmit={console.log('you clicked me')}>
        <input
          id="value-1"
          onChange={e => action1(e.target.value)}
        />
        <button id='action-2' className="primary" type="submit">Save Password</button>
      </form>
    </div>
  </div>
);

export default PasswordCreator;
