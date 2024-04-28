import '../App.css';
import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CurrentState = () => {
    return (
        <div className='main-container'>
            
                        <Card className="card-container">
                            <Card.Body>
                            <Card.Title>Gaza</Card.Title>
                                <Card.Text>
                    Killed: at least 31,726 people, including more than:
	                    More than 13,000 children
	                    84,000 women<br></br>
                    Injured: more than 73,792 people, including at least:
	                    8,663 children
	                    6,327 women
                    Missing: more than 8,000
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="card-container">
                            <Card.Body>
                            <Card.Title>Occupied West Bank</Card.Title>
                                <Card.Text>
                    Killed: at least 435 people, including more than 116 children
                    Injured: more than 4,650 people
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="card-container">
                            <Card.Body>
                            <Card.Title>Israel</Card.Title>
                                <Card.Text>
                    Killed: 1,139
                    Injured: at least 8,730
                                </Card.Text>
                            </Card.Body>
                        </Card>
                <br></br>
                <Container>
                <Row>
                    <br></br>
                    <Card className='card-container'>
                        <Card.Body>
                        <Card.Title className='card-title'>Current State</Card.Title>
                            <Card.Text className='card-text'>
                        Over two million Palestinians live at risk of hunger, preventable diseases, and air strikes. 
                        Nearly 70 percent of the homes in Gaza have been destroyed or severely damaged leaving 75 percent of the population displaced. The displaced population lives in shelters built from scavenged material. 
                        At night, temperatures can reach lows of 40F, causing preventable health issues in children, pregnant women, and elderly.
                            </Card.Text>
                    </Card.Body>
                    </Card>
                </Row>
            </Container>   
        </div>
    );
};

export default CurrentState;