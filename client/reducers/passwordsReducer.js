import * as types from '../constants/actionTypes.js';

const initialState = {
  passwordList: [],
  totalPasswords: 0,
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
    case types.UPDATE_NEW_PASSWORD: {
      console.log('at update new password switch case')
      console.log('payload', action.payload);
      newPassword = Object.assign({}, state.newPassword);
      newPassword[action.payload[0]] = action.payload[1];
      console.log('newPasswordVariable', newPassword)
      return{
        ...state,
        newPassword,
      }
    }
    case types.CREATE_PASSWORD: {
      console.log('at create password switch case');
      passwordList = state.passwordList.slice();
      passwordList.push (action.payload);
      totalPasswords = passwordList.length;
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
        passwordList,
        totalPasswords,
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