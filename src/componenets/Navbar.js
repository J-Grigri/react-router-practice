import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Form, Button, Container, FormControl } from "react-bootstrap";


export default function navbar() {
    return (
        <Navbar fixed bg="light" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Container>
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Candidates</Nav.Link>
                        <Nav.Link href="/CreateCandidate">Create a new candidate</Nav.Link>
                    </Nav>
                    <Form inline>
                        <Button variant="outline-success">Login</Button>
                    </Form>
                </Container>
            </Navbar.Collapse>
        </Navbar>
    )
}
