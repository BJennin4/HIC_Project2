import '../App.css';
import React from 'react';
import Card from 'react-bootstrap/Card';

const Home = () => {
    return (
        <div className='main-container'>
            <Card className='card-container'>
                <Card.Body>
                    <Card.Title className='card-title'>Overview of the Gaza Conflict</Card.Title>
                        <Card.Text className='card-text'>
                        <p>The Gaza Conflict refers to the ongoing conflict in Gaza between Israel and militant Palestinian groups. The primary Palestinian groups are Hamas and the Palestinian Islamic Jihad (PIJ). Recently violence has been escalating, leading to large scale casualties and destruction of infrastructure. This escalation stems from Hamas attacks on Israel from the Gaza Strip on October 7th. This attack resulted in more than 1,200 casualties, which were primarily Israeli citizens. More than 240 hostages were also taken during the attack.</p>

                        <p>After this attack Israel declared itself in a state of war, beginning with the Israel Defense Forces (IDF) conducting air strikes on the Gaza strip, followed by incursions of ground troops and armored vehicles. This war has led to a humanitarian crisis in the Gaza Strip, including accusations of genocide against Israel. Currently the war is an ongoing and complex situation with a vast historical background. </p>
                        </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Home;