import '../App.css';
import React from 'react';
import Card from 'react-bootstrap/Card';


const Actors = () => {
    console.log("Rendering Actors component");
    return (
        <div className='main-container'>
            <Card className="card-container">
                <Card.Body>
                    <Card.Title>Civilians</Card.Title>
                    <Card.Text>
                        This is card 1.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="card-container">
                <Card.Body>
                    <Card.Title>Hamas</Card.Title>
                    <Card.Text>
                        This is card 2.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="card-container">
                <Card.Body>
                    <Card.Title>IDF</Card.Title>
                    <Card.Text>
                        This is card 3.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Actors;