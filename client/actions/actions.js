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

export const createPassword = (dispatch, password) => {
  console.log('at create password action')
  fetch('http://localhost:3003/api/passwords',{
    method: 'POST',
    body: JSON.stringify(password),
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

// export const updateNewEntry = newEntry => ({
//   type: UPDATE_NEW_ENTRY,
//   payload: newEntry,
// })
