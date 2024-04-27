import '../App.css';
import '../index.css';
import React from 'react';
import Card from 'react-bootstrap/Card';

const Home = () => {
    return (
        <div className='home-container'>
            <Card className='card-container'>
                <Card.Body>
                    <Card.Title>Home Info</Card.Title>
                        <Card.Text>
                            this is the home page.
                        </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Home;