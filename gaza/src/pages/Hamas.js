import '../App.css';
import React from 'react';
import Card from 'react-bootstrap/Card';
import '../actors.css';


const Hamas = () => {
    return (
        <div className='main-container'>
            <Card className='card-container'>
                <Card.Body>
                    <Card.Title className='card-title'>Hamas</Card.Title>
                    <Card.Text className='card-text'>
                        <p>Hamas was founded by Sheikh Ahmed Yassin, a Palestinian refugee. In Arabic it means Islamic Resistance Movement, and has ties to the Sunni Muslim Brotherhood from Egypt in the 1920s. It was established in 1987 during the first intifada. The first intifada was a Palestinian uprising and protests against Israeli occupation. The group has a goal of resistance to Israel and the creation an Islamic state on that land. Hamas is mostly concentrated within the Gaza Strip and West Bank.

                            Hamas advocates using violence to promote Palestinian interests and aims to dismantle Israel. The group has launched numerous suicide bombings and thousands of rocket attacks from Gaza into Israel. It also created tunnels for smuggling and staging assaults.

                            Despite focusing on governing Gaza recently, Hamas gained more support post-2008 conflict. It took over Gaza in 2006 after defeating Fatah in the elections, leading to its label as a terrorist organization by the US and EU due to its violent actions against Israel.

                            Since the mid-2000s, Hamas has managed Gaza and attacked Israel using Iranian-supplied weapons. With training from Iran's Revolutionary Guard, Hamas built a stockpile of about thirty thousand missiles. Their strategy includes incendiary raids and kidnappings in Israel. In the 2021 Jerusalem unrest, Hamas launched over four thousand rockets, causing civilian harm. They collaborated with Iran's Revolutionary Guard and Hezbollah until a ceasefire was brokered by the US and Egypt.</p>
                    </Card.Text>
                </Card.Body>
                <div className="images-row">
                    <img src="./gazaMap.jpeg" className="map" />
                    <img src="./hamaslogo.png" className="hamaslogo" />
                </div>
            </Card>

        </div>
    );
}

export default Hamas;