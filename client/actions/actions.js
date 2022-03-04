import * as types from '../constants/actionTypes';


export const getPasswords = (dispatch) => {
  fetch('http://localhost:3003/api/passwords',{method: 'GET',}
.then (res => res.json)
.then(passwords => dispatch({
type: types.GET_PASSWORDS,
payload: passwords,
}))
.catch(err => {console.log(err)})


// export const createPassword = password => {
//   console.log('at create password action');
//   //const reqBody = JSON.stringify(password);
//   console.log(password);
//   dispatch({
//     type: types.CREATE_PASSWORD,
//     payload: password
//   });

// export const updateNewPassword = updatedKeyArray => ({
//   type: types.UPDATE_NEW_PASSWORD,
//   payload: updatedKeyArray,
// })
