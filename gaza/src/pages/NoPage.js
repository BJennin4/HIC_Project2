import '../App.css';
import React from 'react';
import Card from 'react-bootstrap/Card';

const NoPage = () => {
        return (
        <div className='main-container'>
            <Card className='card-container'>
                <Card.Body>
                    <Card.Title className='card-title'>404 Page Not Found</Card.Title>
                        <Card.Text className='card-text'>
                            The page you are trying to access was not found. 
                            <br></br>
                            The navbar above can be used to access a valid page. 
                        </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default NoPage;