import React from 'react'
import {Form, Button, Container} from 'react-bootstrap'
import {useDispatch} from "react-redux";
import {useHistory} from 'react-router-dom'

export default function Login() {
    let email = ''
    let password = ''
    let dispatch = useDispatch()
    let history = useHistory()

    let login = (e) =>{
        e.preventDefault();
        let user = {email:email, password:password}
        dispatch ({type:'LOGIN', payload:user})
        history.push('/')
    }
    return (
        <Container>
            <Form onSubmit={(e)=>login(e)}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={(e)=>email=e.target.value} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={(e)=>password=e.target.value} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="outline-success" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    )
}
