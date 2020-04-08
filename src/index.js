import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router} from 'react-router-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import { Redirect } from 'react-router-dom'

let initialState = {
  user: {email:'',password:''},
  
}
//reducer always have state and action
function reducer (state=initialState, action){
  if(action.type === 'LOGIN'){
    state.user = action.payload
    state.user.authenticated=true;
    console.log("hmmm",state.user)
  }
  else if(action.type === 'LOGOUT'){
    console.log("ahaha");
    state.user = initialState.user
    console.log("no user",state.user)
  }
  // else if(action.type === 'EDIT'){
  //   if (state.user.authenticated === true) {
  //           if (state.user.email === candidate.email){
  //               return <Redirect to='/CandidatePage/${candidate.id}' />
  //           } 
  //           else (state.user.email !== candidate.email)
  //               return alert("You can only edit your own profile")
  //       } else return <Redirect to='/Login' />
  //   state.user.authenticated ? (
  //   alert("hello")) : (<Link to='/Login'>)
  // }


  return {...state}
}
const store = createStore(reducer)

// you already have it here.c
ReactDOM.render(
  <Provider store={store}> 
  <Router>
    <App />
  </Router>
  </Provider>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
