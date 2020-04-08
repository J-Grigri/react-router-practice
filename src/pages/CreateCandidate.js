import React, { useState, useEffect, } from 'react'
import { Form, Button, Col, Container } from "react-bootstrap";

export default function CreateCandidate() {
    const [newCandidate, setNewCandidate] = useState([]);
    console.log("Here", [newCandidate])

    useEffect(() => {
        const getCandidates = async () => {
            const response = await fetch("http://localhost:3001/candidates")
            const data = await response.json();
            console.log("Candidate data", data)
            setNewCandidate(data)
        }
        getCandidates();
    }, []);


    const postData = async (e) => {
        e.preventDefault();//to block sending a url request
        
        let config = {
            method: "POST",//POST method adds data to the excisting json file
            body: JSON.stringify(newCandidate),
            headers: {
                "Content-Type": "application/json"
            }
        }
        const response = await fetch(`http://localhost:3001/candidates`, config)
    }

    return (
        <Container>
            <h2>Create a new candidate </h2>
            <Form onSubmit={(e) => postData(e)}>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control  type="text" onChange={(e) => setNewCandidate({ ...newCandidate, first_name: e.target.value })} />
                    </Form.Group>


                    <Form.Group as={Col}>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" onChange={(e) => setNewCandidate({ ...newCandidate, last_name: e.target.value })} />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>email</Form.Label>
                        <Form.Control type="email" onChange={(e) => setNewCandidate({ ...newCandidate, email: e.target.value })} />
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label>Gender</Form.Label>
                        <Form.Control type="text" onChange={(e) => setNewCandidate({ ...newCandidate, gender: e.target.value })} />
                    </Form.Group>

                </Form.Row>


                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>Company</Form.Label>
                        <Form.Control type="text" onChange={(e) => setNewCandidate({ ...newCandidate, company: e.target.value })} />
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label>Job title</Form.Label>
                        <Form.Control type="text" onChange={(e) => setNewCandidate({ ...newCandidate, job_title: e.target.value })} />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" onChange={(e) => setNewCandidate({ ...newCandidate, city: e.target.value })} />
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label>Country</Form.Label>
                        <Form.Control type="text" onChange={(e) => setNewCandidate({ ...newCandidate, country: e.target.value })} />
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label>Photo</Form.Label>
                        <Form.Control type="text" onChange={(e) => setNewCandidate({ ...newCandidate, photo_url: e.target.value })} />
                    </Form.Group>
                </Form.Row>

                <Button variant="outline-success" type="submit" Link href="/">
                    Submit
            </Button>
            </Form>
        </Container>
    )
}
