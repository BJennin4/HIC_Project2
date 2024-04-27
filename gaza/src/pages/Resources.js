import '../App.css';
import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';

const Resources = () => {
    return (
        <div className='main-container'>
            <Card className='card-container'>
                <Card.Body>
                    <Card.Title className='card-title'>Resources</Card.Title>
                        <Card.Text className='card-text'>
                            <ListGroup className='list-group'>
                                <ListGroup.Item className='list-item'>Cras justo odio</ListGroup.Item>
                                <ListGroup.Item className='list-item'>Dapibus ac facilisis in</ListGroup.Item>
                                <ListGroup.Item className='list-item'>Morbi leo risus</ListGroup.Item>
                                <ListGroup.Item className='list-item'>Porta ac consectetur ac</ListGroup.Item>
                                <ListGroup.Item className='list-item'>Vestibulum at eros</ListGroup.Item>
                            </ListGroup>
                        </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Resources;