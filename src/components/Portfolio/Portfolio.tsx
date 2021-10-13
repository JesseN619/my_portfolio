import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import consolesImg from '../../assets/images/consoles-img.png';
import flaskApp from '../../assets/images/flask_app.png';
import producerFinder from '../../assets/images/producerfinder.png';

export const Portfolio = () => {
    return (
        <div>
            <Container>
                <Row className="mx-auto">
                    <Col lg={4} md={6} className="mt-5 mx-auto">
                        <Card className="mx-auto border border-primary border-4 portfolio-card" bg="primary">
                            <a href="https://producerfinder-6aca0.web.app/" target="_blank">
                                <Card.Img variant="top" src={producerFinder} />
                            </a>
                            <Card.Body className="d-flex flex-column justify-content-between">
                                <Card.Title>ProducerFinder</Card.Title>
                                <Card.Text>
                                    Enter a song and find the producer and their most popular songs. 
                                    Add their songs to your Spotify playlists. 
                                    Built with TypeScript, React, Redux, TailwindCSS.
                                </Card.Text>
                                <div>
                                    <Card.Link className="link-light" href="https://github.com/JesseN619/ProducerFinder" target="_blank">GitHub</Card.Link>
                                    <Card.Link className="link-light" href="https://producerfinder-6aca0.web.app/" target="_blank">App</Card.Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={4} md={6} className="mt-5 mx-auto">
                        <Card className="mx-auto border border-primary border-4 portfolio-card" bg="primary">
                            <a href="https://console-inventory.herokuapp.com/" target="_blank">
                                <Card.Img variant="top" src={flaskApp} />
                            </a>
                            <Card.Body className="d-flex flex-column justify-content-between">
                                <Card.Title>Game Consoles Inventory (Flask)</Card.Title>
                                <Card.Text>
                                    Log the video game consoles you have owned.
                                    Built with Flask. Created a REST API with PostgreSQL and Heroku.
                                </Card.Text>
                                <div>
                                    <Card.Link className="link-light" href="https://github.com/JesseN619/game_console_inventory" target="_blank">GitHub</Card.Link>
                                    <Card.Link className="link-light" href="https://console-inventory.herokuapp.com/" target="_blank">App</Card.Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={4} md={6} className="mt-5 mx-auto">
                        <Card className="mx-auto border border-primary border-4 portfolio-card" bg="primary">
                            <a href="https://console-inventory.web.app/" target="_blank">
                                <Card.Img variant="top" src={consolesImg} />
                            </a>
                            <Card.Body className="d-flex flex-column justify-content-between">
                                <Card.Title>Game Consoles Inventory (React)</Card.Title>
                                <Card.Text>
                                    Log the video game consoles you have owned.
                                    Built with a React front end. Utilizes a custom API via Flask back end.
                                </Card.Text>
                                <div>
                                    <Card.Link className="link-light" href="https://github.com/JesseN619/game_console_react" target="_blank">GitHub</Card.Link>
                                    <Card.Link className="link-light" href="https://console-inventory.web.app/" target="_blank">App</Card.Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    
                </Row>
            </Container>
        </div>
    )
}