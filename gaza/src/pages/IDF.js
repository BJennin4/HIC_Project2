import '../App.css';
import React from 'react';
import Card from 'react-bootstrap/Card';

const IDF = () => {
    return (
        <div className='main-container'>
            <Card className='card-container'>
                <Card.Body>
                    <Card.Title className='card-title'>Israel Defense Forces</Card.Title>
                        <Card.Text className='card-text'>
                        The IDF was established on May 26, 1948 following Israel's Declaration of Independence
                        </Card.Text>
                </Card.Body>
            </Card>
            <Card className='card-container'>
                <Card.Body>
                    <Card.Title className='card-title'></Card.Title>
                        <Card.Text className='card-text'>
                        </Card.Text>
                </Card.Body>
            </Card>
            <Card className='card-container'>
                <Card.Body>
                    <Card.Title className='card-title'></Card.Title>
                        <Card.Text className='card-text'>
                        </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default IDF;