import * as types from '../constants/actionTypes';


export const loadPasswords = dispatch => {
  console.log('at load passwords action')
  fetch('http://localhost:3003/api/passwords',{
    method: 'GET',
  })
  .then(res => res.json())
  .then(passwords => {
    console.log(passwords);
    dispatch({
      type: types.GET_PASSWORDS,
      payload: passwords,
    })
  })
  .catch(error => console.log(error));
};
