 import { combineReducers } from 'redux';
 import passwordsReducer from './passwordsReducer.js';
 const reducers = combineReducers({
  passwords: passwordsReducer,
 })
 export default reducers;
 