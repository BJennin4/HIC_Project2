import React from 'react';
import Card from 'react-bootstrap/Card';
import '../App.css';

const Home = () => {
    return (
        <div>
            <h1>Home Page</h1>
            <Card className='card-container'>
                <Card.Body>
                    <Card.Title>Home Info</Card.Title>
                        <Card.Text>
                            This is the home page info.
                        </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Home;