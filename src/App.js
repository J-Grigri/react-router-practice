import React from 'react';
import './App.css';
import { Route, Switch, Redirect, useHistory} from "react-router-dom";
import { useSelector } from 'react-redux'
import Homepage from "./pages/Homepage"
import CreateCandidate from "./pages/CreateCandidate"
import EditCandidate from "./pages/EditCandidate"
import Navbar from "./componenets/Navbar";
import Login from "./pages/Login"


function App() {
  let history  = useHistory()
  let user = useSelector(state =>state.user)

  const ProtectedRoute = (props) => {
    if (user.isAuthenticated == true){
      return(
        <Route {...props}/>
      )
    } else {
        return <Redirect to='/'/>
    }
  }

  return (
    <>
    <div>
      <Navbar/>
      <button onClick={() => history.push('/Login')}>Login</button>
    </div>
    <h2 >Welcome! {user.email}</h2>

    <div>
        <Switch>

          {/* <Link to="/">goto Homepage</Link>okkkkkk
          <Link to="/CandidatePage/:id">go to Candidate page</Link> */}
          <Route path="/login" exact component={Login}/>
          <Route path="/CreateCandidate" exact component={CreateCandidate}/>;
          <Route path="/" exact component={Homepage}/>
          <ProtectedRoute path="/CandidatePage/:id" exact render={props => <EditCandidate {...props}/>}
          />
          
        </Switch>
    </div>
    </>
  );
}


export default App;
