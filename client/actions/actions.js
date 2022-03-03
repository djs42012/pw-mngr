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

export const createPassword = event => (dispatch, getState) => {
  event.preventDefault();
  console.log('at create password action');
  const reqBody = JSON.stringify(getState().passwords.newPasword);
  fetch('http://localhost:3003/api/passwords',{
    method: 'POST',
    body: reqBody,
    headers: { 'Content-Type': 'application/json' }
  })
  .then(res => res.json())
  .then(password => {
    console.log(password);
    dispatch({
      type: types.CREATE_PASSWORD,
      payload: password,
    })
  })
  .catch(error => console.log(error));
};

export const updateNewPassword = updatedKeyArray => ({
  type: types.UPDATE_NEW_PASSWORD,
  payload: updatedKeyArray,
})
