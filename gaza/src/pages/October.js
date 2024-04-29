import React from 'react';
import Card from 'react-bootstrap/Card';
import '../october.css';

const October = () => {
    return (
        <div className='main-container'>
            <Card className='card-container'>
                <Card.Body>
                    <Card.Title className='card-title'>The Event On October Seventh</Card.Title>
                        <img src="./whitebackground.png" className="background" alt='White Background'/>
                        <img src="./isrealattackoverlay.png" className="oct1Pic" alt='Isreal Citizens'/>
                        <h3>JERUSALEM, ISRAEL - OCTOBER 12: The mother (L), sister (R) and immediate family of Valentin (Eli) Ghnassia, 23, who was killed in a battle with Hamas militants at Kibbutz Be’eeri near the Israeli border with the Gaza Strip, react during his funeral ceremony on October 12, 2023 (Photo by Alexi J. Rosenfeld/Getty Images) </h3>
                            <Card.Text className='card-octtext'>
                            <p>
                            <strong>Hamas</strong> militants stormed from the blockaded Gaza Strip into nearby Israeli towns, resulting in numerous fatalities and abductions in an unprecedented attack during a major Jewish holiday on October 7th, 2023. A stunned Israel, in response, launched airstrikes in Gaza, with its prime minister declaring a state of war, saying the country is now at war with Hamas and vowing to inflict an “unprecedented price.”
                            </p>
                            <p>
                            In a display of remarkable scope, Hamas gunmen infiltrated up to 22 locations outside the borders of Gaza, reaching towns and other settlements located as far as 15 miles, or 24 kilometers, from the Gaza border. Civilians and soldiers fell victim as the Israeli military hurried to pursue a counterattack.
                            </p>
                            <p>
                            The conflict persisted throughout the night as militants engaged in gun battles and held hostages in standoffs across two towns. In a third town, militants seized control of a police station, resulting in a protracted struggle for Israeli forces to regain control by Sunday morning.
                            </p>
                            <p>
                            As dawn broke on Sunday, militants launched additional rockets from Gaza, striking a hospital in the coastal Israeli town of Ashkelon. While the hospital sustained damage, there were no reported casualties, according to senior hospital official Tal Bergman. Footage provided by Barzilai Medical Center depicted substantial structural damage, with a large hole punctured in a wall and debris strewn across the floors of seemingly deserted rooms and corridors.
                            </p>
                            <p>
                            Israeli media, citing rescue service officials, reported a staggering death toll of at least 250 individuals and 1,500 injuries from Saturday's attack, marking one of the deadliest incidents in Israel in decades. Along side this, the Palestinian Health Ministry disclosed that at least 232 individuals in Gaza lost their lives and 1,700 sustained injuries as a result of Israeli airstrikes. Additionally, Hamas fighters took an undisclosed number of civilians and soldiers captive into Gaza.    
                            </p>
                            <p>
                            The conflict remained poised to escalate further as Israel vowed to retaliate. Previous confrontations between Israel and Hamas have resulted in extensive loss of life and widespread destruction in Gaza, along with sustained rocket fire targeting Israeli towns. The current situation carries heightened volatility, with Israel's far-right government grappling with the security breach and Palestinians facing deep-seated despair amid enduring occupation in the West Bank and a stifling blockade in Gaza.    
                            </p>
                            </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default October;