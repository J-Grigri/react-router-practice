import React from 'react';
import './App.css';
import { Route, Switch, Redirect,} from "react-router-dom";
import { useSelector } from 'react-redux'
import Homepage from "./pages/Homepage"
import CreateCandidate from "./pages/CreateCandidate"
import EditCandidate from "./pages/EditCandidate"
import Navigation from "./componenets/Navbar";
import Login from "./pages/Login"



function App() {

  let user = useSelector(state =>state.user)


  const ProtectedRoute = (props) => {
    if (user.authenticated == true){
      return(
        <Route {...props}/>
      )
    } else {
        return <Redirect to='/Login'/>
    }
  }
 

  return (
    <>
    <div>
      <Navigation/>
          
    </div>

    <div>
        <Switch>
          
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
