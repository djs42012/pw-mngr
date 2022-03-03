import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers/index.js';
import { loadPasswords } from './actions/actions';

const store = createStore(
  reducers,
  composeWithDevTools(),
);
console.log('loading passwords fro')
loadPasswords();
export default store;
