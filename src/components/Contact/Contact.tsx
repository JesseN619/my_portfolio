import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export const Contact = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col className="text-center mt-5 mb-4">
                        <h2>Send me an email</h2>
                    </Col>
                </Row>
                <Row>
                    <Col xl={6} lg={8} md={10} className="mx-auto">
                        <Form>
                            <Col xs={7} className="mx-auto">
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control placeholder="John Doe" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="name@example.com" />
                                </Form.Group>
                            </Col>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows={8} />
                            </Form.Group>
                            <div className="text-center">
                                <Button variant="primary" type="submit" className="py-2 px-5">
                                    Send
                                </Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}