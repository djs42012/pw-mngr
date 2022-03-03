import * as types from '../constants/actionTypes';

export const loadPasswords = passwords => ({
  type: types.GET_PASSWORDS,
  payload: passwords,
});
/* -------------------------- can also take form of ------------------------- */
// export const actionCreator2 = payload => (dispatch, getState) => {
//   if (getState().someStateData === 'some condition') {
//     dispatch(
//       { 
//         type: types.ACTION_TYPE2, 
//         payload: payload,
//       }
//     );
//   }
// };

