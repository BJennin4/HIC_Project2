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
                        <p>The Israeli Defense Force (IDF) was established on May 26, 1948 following Israel's Declaration of Independence. Today the organization operates on a budget of pver 24.3 Billion dollars and utilizes over 500,000 personel.
                           Israel launched their initial invasion of the Gaza Strip on the 27th of October, 2023. The stated goal of the operation is the elimination of Hamas. 
                           In pursuit of their goals, the IDF has dropped more than 45,000 bombs throughout the region often indiscriminately harming civilian populations.
                        </p>
                        <p>Since Hamas siezed control of the Gaza Strip in 2007 Israel has blockaded Gaza, preventing goods from reaching the region. In response to the conflict, Israel has taken control of 
                            access to food, water, and electricity, further burdening civilians involved in the conflict
                        </p>
                        <p>
                            "We are putting a complete siege on Gaza. No electricity. No food, no water, no gas. It's all closed. We're fighting animals and are acting accordingly.” - Yoav Galant, Defense Minister of Israel, in response to the October 7th attack
                        </p>
                        </Card.Text>
                </Card.Body>
                <div className="images-row">
                    <img src="./yoavgalant.PNG"/>
                    <img src="./Badge_of_the_Israeli_Defense_Forces_2022_version.svg.png" />
                </div>
            </Card>
        </div>
    );
}

export default IDF;