import * as types from '../constants/actionTypes.js';

const initialState = {
  totalPasswords: 0,
  lastPasswordId: 0,
  passwordList: [],
};

const passwordsReducer = (state = initialState, action) => {
  console.log('at passwords reducer');

  let passwordList;
  let totalPasswords;
  console.log(action);

  switch (action.type) {
    case types.GET_PASSWORDS: {
      console.log('here');
      passwordList = action.payload;
      totalPasswords = action.payload.length;
      return {
        ...state,
        totalPasswords,
        passwordList,
      };
    };
    default: {
      console.log('returning default state')
      return state;
    }
  }
};
  
  export default passwordsReducer;