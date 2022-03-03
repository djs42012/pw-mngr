import * as types from '../constants/actionTypes.js';

const initialState = {
  totalPasswords: 0,
  lastPasswordId: 0,
  passwordList: [],
  newPassword: {
    pwid: '',
    account : '',
    username: '',
    alias: '',
    password: '',
    uri: '',
    notes: '',
  },
};

const passwordsReducer = (state = initialState, action) => {
  console.log('at passwords reducer');

  let passwordList;
  let totalPasswords;
  let newPassword;
;

  switch (action.type) {
    case types.GET_PASSWORDS: {
      console.log('at get passwords switch case');
      passwordList = action.payload;
      totalPasswords = action.payload.length;
      return {
        ...state,
        totalPasswords,
        passwordList,
      };
    };
    case types.CREATE_PASSWORD: {
      console.log('at create password switch case');
      passwordList = state.passwordList.slice();
      passwordList.push(action.payload);
      totalPasswords = state.totalPasswords ++;
      newPassword = {
        pwid: '',
        account : '',
        username: '',
        alias: '',
        password: '',
        uri: '',
        notes: '',
      }
      return {
        ...state,
        totalPasswords,
        passwordList,
        newPassword,
      }
    };
    default: {
      console.log('returning default state')
      return state;
    }
  }
};
  
  export default passwordsReducer;