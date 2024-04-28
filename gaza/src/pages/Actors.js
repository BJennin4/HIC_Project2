import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../actors.css';

function Actors() {
    const cards = [
        {
            image: "civilians.png",
            title: "Civilians",
            text: "Click the link above to read about the war's impact on civilians in the Gaza strip",
            link: "/Civilians"
        },
        {
            image: "hamas.png",
            title: "Hamas",
            text: "Click the link above learn about the history of Hamas and their role in the events taking place",
            link: "/Hamas"
        },
        {
            image: "idf.png",
            title: "IDF",
            text: "Click the link above to learn about the IDF and their role in the war",
            link: "/IDF"
        }
    ];

    return (
        <div className="parent">
            <div className="actorsTitle">Actors at Play</div>
            <Row xs={1} md={3} className="g-4">
                {cards.map((card, idx) => (
                    <Col key={idx}>
                        <Card>
                            <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/${card.image}`} />
                            <Card.Body>
                                <Card.Title>
                                    <Link to={card.link}>
                                        {card.title}
                                    </Link>
                                </Card.Title>
                                <Card.Text>
                                    {card.text}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default Actors;







// import '../App.css';
// import React from 'react';
// import Card from 'react-bootstrap/Card';


// const Actors = () => {
//     console.log("Rendering Actors component");
//     return (
//         <div className='main-container'>
//             <Card className="card-container">
//                 <Card.Body>
//                     <Card.Title>Civilians</Card.Title>
//                     <Card.Text>
//                         This is card 1.
//                     </Card.Text>
//                 </Card.Body>
//             </Card>
//             <Card className="card-container">
//                 <Card.Body>
//                     <Card.Title>Hamas</Card.Title>
//                     <Card.Text>
//                         This is card 2.
//                     </Card.Text>
//                 </Card.Body>
//             </Card>
//             <Card className="card-container">
//                 <Card.Body>
//                     <Card.Title>IDF</Card.Title>
//                     <Card.Text>
//                         This is card 3.
//                     </Card.Text>
//                 </Card.Body>
//             </Card>
//         </div>
//     );
// }

// export default Actors;