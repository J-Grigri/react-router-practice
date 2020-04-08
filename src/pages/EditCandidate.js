import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { Form, Button, Col, Container, } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function CandidatePage(props) {
    console.log({ props })
    const { id } = useParams();//get the parameter from url. React hook
    const [candidate, setCandidate] = useState(null)
    let history = useHistory();


    const getSingleCandidate = async () => {
        let url = `http://localhost:3001/candidates/{id}`
        let response = await fetch(url);
        let result = await response.json();
        console.log("candidate 11", result);
        setCandidate(result)
    }

    useEffect(() => {
        getSingleCandidate();
    }, []);

    const postData = async (e) => {
        e.preventDefault();//to block sending a url request
        
        let config = {
            method: "PUT",
            body: JSON.stringify(candidate),
            headers: {
                "Content-Type": "application/json"
            }
        }
        const response = await fetch(`http://localhost:3001/candidates/${id}`, config)
        //go back to previous page after post
        history.goBack();
    }

    if (candidate == null) {
        return (
            <h2>Loading...</h2>
        )
    }
    return (
        <Container>
        <Form onSubmit={(e) => postData(e)}>
                <h1>Edit candidate</h1>
            <Form.Row>
                <Form.Group as={Col}>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" value={candidate.first_name} onChange={(e) => setCandidate({ ...candidate, first_name: e.target.value })} />
                </Form.Group>

                <Form.Group as={Col}>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" value={candidate.last_name} onChange={(e) => setCandidate({ ...candidate, last_name: e.target.value })} />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col}>
                    <Form.Label>email</Form.Label>
                    <Form.Control type="email" value={candidate.email} onChange={(e) => setCandidate({ ...candidate, email: e.target.value })} />
                </Form.Group>

                <Form.Group as={Col}>
                    <Form.Label>Gender</Form.Label>
                    <Form.Control type="text" value={candidate.gender} onChange={(e) => setCandidate({ ...candidate, gender: e.target.value })} />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col}>
                    <Form.Label>Company</Form.Label>
                    <Form.Control type="text" value={candidate.company} onChange={(e) => setCandidate({ ...candidate, company: e.target.value })} />
                </Form.Group>

                <Form.Group as={Col}>
                    <Form.Label>Job title</Form.Label>
                    <Form.Control type="text" value={candidate.job_title} onChange={(e) => setCandidate({ ...candidate, job_title: e.target.value })} />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col}>
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" value={candidate.city} onChange={(e) => setCandidate({ ...candidate, city: e.target.value })} />
                </Form.Group>

                <Form.Group as={Col}>
                    <Form.Label>Country</Form.Label>
                    <Form.Control type="text" value={candidate.country} onChange={(e) => setCandidate({ ...candidate, country: e.target.value })} />
                </Form.Group>

                <Form.Group as={Col}>
                    <Form.Label>Photo</Form.Label>
                    <Form.Control type="text" value={candidate.photo_url} onChange={(e) => setCandidate({ ...candidate, photo_url: e.target.value })} />
                </Form.Group>
            </Form.Row>

                <Button variant="outline-success" type="submit">
                Submit
            </Button>
        </Form>
        </Container>
    )

}
