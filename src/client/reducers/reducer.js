//Action creator
const INITIAL_STATE = "INITIAL_STATE";
//Reducer Action
export const loadAccounts = (accounts) => ({type: INITIAL_STATE, payload: accounts})
//helper functions
export const getAccounts = () => {
     return fetch('/api/accounts', {credentials: "include"})
               .then(res => res.json())
}
export const login = () => {
          window.location = '/auth/login';
}
//Action dispatcher
export const dispatchFetchAccounts = () => {
     return (dispatch) => {
          getAccounts()
          .then(accounts => dispatch(loadAccounts(accounts)))
     }
}
//Reducer
export default (state = [], action) => {
switch (action.type) {
    case INITIAL_STATE:
      return {...state, accounts: action.payload}
    default:
      return state;
  }
};