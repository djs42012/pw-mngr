import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers/index.js';
import * as actions from './actions/actions.js'
const store = createStore(
  reducers,
  composeWithDevTools(),
);
console.log('dispatching from store')
console.log('at load passwords action')
store.dispatch(actions.loadPasswords(dispatch));
export default store;
