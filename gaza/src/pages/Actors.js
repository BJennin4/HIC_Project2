import React from 'react';
import Card from 'react-bootstrap/Card';


const Actors = () => {
    console.log("Rendering Actors component");
    return (
        <div>
            <h1>Actors Page</h1>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Actor 1</Card.Title>
                    <Card.Text>
                        This is actor 1's information.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Actors;
