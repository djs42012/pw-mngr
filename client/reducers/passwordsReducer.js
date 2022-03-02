import * as types from '../constants/actionTypes.js';

const initialState = {
  
  };
  
  const passwordsReducer = (state = initialState, action) => {
    let someVariable;
  
    switch (action.type) {
      case types.ACTION_TYPE1: {
        //do some stuff
        return {
          ...state,
        }
      };
      case types.ACTION_TYPE2: {
        //do some stuff
        return {
          ...state,
        };
      };
      default: {
        return state;
      }
    }
  };
  
  export default passwordsReducer;