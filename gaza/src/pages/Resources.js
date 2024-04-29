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
                            <ListGroup.Item className='list-item'>Current State of Conflict: <a href='https://www.care.org/news-and-stories/news/life-in-gaza-a-different-kind-of-suffering/#:~:text=Almost%20four%20months%20after%20the,apartments%20with%20deplorable%20living%20conditions.'>www.care.org/news-and-stories/news/life-in-gaza-a-different-kind-of-suffering</a>, <a href='https://apnews.com/article/israel-gaza-ground-operation-invasion-6ba5bf06f81c315252a9e53735f3de47'>apnews.com/article/israel-gaza-ground-operation-invasion</a> </ListGroup.Item>
                            <ListGroup.Item className='list-item'>IDF: <a href='https://apnews.com/article/israel-gaza-ground-operation-invasion-6ba5bf06f81c315252a9e53735f3de47'>apnews.com/article/israel-gaza-ground-operation-invasion</a>, <a href='https://www.amnestyusa.org/updates/palmer-report-did-not-find-gaza-blockade-legal-despite-media-headlines/'>www.amnestyusa.org/updates/palmer-report-did-not-find-gaza-blockade-legal-despite-media-headlines</a>, </ListGroup.Item>
                            <ListGroup.Item className='list-item'>Civilians: <a href='https://www.unfpa.org/occupied-palestinian-territory'>UnitedNationsPopulationFund</a>,<a href='https://www.cfr.org/event/virtual-media-briefing-international-law-and-humanitarian-crisis-gaza'>CouncilonForeignRelations</a>,<a href="https://www.ohchr.org/en/stories/2024/01/gaza-massive-human-rights-crisis-and-humanitarian-disaster">UnitedNationsHumanRights</a> </ListGroup.Item>
                            <ListGroup.Item className='list-item'>Hamas: <a href='https://www.cfr.org/backgrounder/what-hamas'>CouncilonForeignRelations</a>,<a href='https://www.theguardian.com/world/2023/oct/12/what-is-hamas-the-militant-group-that-rules-gaza'>TheGaurdian</a>,<a href="https://www.dni.gov/nctc/ftos/hamas_fto.html#:~:text=HAMAS%20emerged%20in%201987%20during,Palestinian%20state%20in%20Israel%27s%20place">DNI.gov</a> </ListGroup.Item>
                        </ListGroup>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Resources;