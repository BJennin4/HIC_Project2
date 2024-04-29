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
                                <ListGroup.Item className='list-item'>Home: <a href='https://www.britannica.com/event/Israel-Hamas-War'>britannica.com</a></ListGroup.Item>
                                <ListGroup.Item className='list-item'>Timeline: <a href='https://www.nytimes.com/2023/10/07/world/middleeast/israel-gaza-conflict-timeline.html'>nytimes.com</a>,<a href='https://en.wikipedia.org/wiki/Suez_Crisis'>wikipedia/Suez Crisis</a>,<a href="https://en.wikipedia.org/wiki/Oslo_Accords">wikipedia/Oslo Accords</a></ListGroup.Item>
                                <ListGroup.Item className='list-item'>October seventh Event: <a href='https://apnews.com/article/israel-palestinians-gaza-hamas-rockets-airstrikes-tel-aviv-11fb98655c256d54ecb5329284fc37d2'>apnews.com</a>,<a href='https://www.hrw.org/report/2015/09/22/look-another-homeland/forced-evictions-egypts-rafah'> hrw.org</a></ListGroup.Item>
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