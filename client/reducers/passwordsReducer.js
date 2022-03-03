import * as types from '../constants/actionTypes.js';

const initialState = {
  totalPasswords: 0,
  lastPasswordId: 0,
  passwordList: [],
  };
  
  const passwordsReducer = (state = initialState, action) => {
    let passwordList;
  
    switch (action.type) {
      case types.GET_PASSWORDS: {
        fetch('/passwords',{
          method: 'GET',
        })
        .then(res => passwordList = res)
        return {
          ...state,
          passwordList,
        };
      };
      default: {
        return state;
      }
    }
  };
  
  export default passwordsReducer;