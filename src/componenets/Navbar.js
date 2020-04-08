import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import {Link, useHistory} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'




export default function Navigation() {
    let dispatch = useDispatch();
    let history = useHistory();
    let user = useSelector(state => state.user)

    console.log("here")

    const LoginButton = () => {
    return user.email ? (
        <Button variant="success" onClick={() => dispatch({ type: "LOGOUT" })}>
        SIGN OUT
      </Button>
    ) : (
            <Button variant="success" onClick={() => history.push("/Login")}>
          SIGN IN
        </Button>
      );
  };
    
    return (
        <Navbar fixed bg="light" expand="lg">
        {console.log("here2")}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Container>

                    <Nav className="mr-auto">
                        <Nav.Link href="/">Candidates</Nav.Link>
                        <Nav.Link href="/CreateCandidate">Create a new candidate</Nav.Link>
                    </Nav>
                    {user.authenticated === true ? <h5 style={{ textAlign: "center" }}> Welcome {user.email}</h5> : <></>}
                    
                    <LoginButton/>
                  
                </Container>
            </Navbar.Collapse>
        </Navbar>
    )
}
