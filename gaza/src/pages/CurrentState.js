import '../App.css';
import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CurrentState = () => {
    return (
        <div className='main-container'>
                    <Card className='card-container'>
                        <Card.Body>
                        <Card.Title className='card-title'>Current State</Card.Title>
                            <Card.Text className='card-text'>
                                Over two million Palestinians live at risk of hunger, preventable diseases, and air strikes. 
                                     Nearly 70 percent of the homes in Gaza have been destroyed or severely damaged leaving 75 percent of the population displaced. The displaced population lives in shelters built from scavenged material. 
                                     At night, temperatures can reach lows of 40F, causing preventable health issues in children, pregnant women, and elderly.
                               
                                
                            </Card.Text>
                            <Card.Text>
                                <h1>Civilian Casualities</h1>
                                    Gaza<br></br>
                                    Killed: at least 31,726 people, including more than:
	                                 More than 13,000 children
	                                 84,000 women<br></br>
                                     Injured: more than 73,792 people, including at least: 8,663 children, 6,327 women<br></br>
                                    Missing: more than 8,000
                                    <br></br><br></br>
                                    Occupied West Bank<br></br>
                                    Killed: at least 435 people, including more than 116 children<br></br>
                                    Injured: more than 4,650 people
                                    <br></br><br></br>
                                    Israel<br></br>
                                    Killed: 1,139<br></br>
                                      Injured: at least 8,730
                            </Card.Text>
                    </Card.Body>
                    </Card>
                   
                        

            
        </div>
    );
};

export default CurrentState;