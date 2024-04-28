import '../App.css';
import React from 'react';
import Card from 'react-bootstrap/Card';
import '../actors.css';

const Civilians = () => {
    return (
        <div className="civilians">
            < div className='main-container' >
                <Card className='card-container'>
                    <Card.Body className="body">
                        <Card.Title className='card-title'>Civilians</Card.Title>
                        <Card.Text className='card-text'>
                            <p>Hamas soldiers penetrated the heavily fortified border of Gaza, launching attacks in numerous southern towns and villages of Israel. This lead to approximately 1,400 fatalities. In addition to the fatalities, they caused widespread injuries and abductions of Israeli people. Israel retaliated by declaring war on Hamas, promising to permanently end its existence. This resulted in a siege on Gaza, causing deaths of over 8,000 Palestinians within 3 weeks, 40% of whom were children.

                                Israel performed aerial attacks causing extensive damage to residential areas, educational institutions, and religious sites. A United Nations satellite analysis showed that about 30% of Gaza’s infrastructure was destroyed or damaged. By February, the death toll in Gaza had escalated to 27,748, with more than 66,800 injuries. The numbers are only increasing on a daily basis.

                                A December report from the Integrated Food Security Phase Classification states there are acute food shortages in Gaza that are affecting over 90% of its inhabitants. Things got worse when Gaza's only power plant shut down operations due to a fuel shortage. This ended essential services like desalination and wastewater treatment, leading to a severe water crisis.

                                The humanitarian situation deteriorated rapidly, with safe refuge options decreasing daily. By January, displacement had impacted approximately 75% of Gaza’s population. This is about over two million people. An exodus from the northern regions to Rafah in the south occurred, as people desperately sought safety, turning Rafah into a densely populated refuge.

                                The food security situation has hit extreme levels as  2.2 million people are facing the threat of famine. 378,000 of them are suffering from extreme food shortages, signaling a dire humanitarian crisis in Gaza. The conflict has displaced over three-quarters of Gaza’s population, pushing over a million people into Rafah. This sudden surge has devastated homes and jobs, and spiked disease and malnutrition rates, severely affecting over 155,000 pregnant and breastfeeding women.

                                Shelter conditions are overcrowded and unsanitary, raising fears of disease outbreaks, especially with sewage problems in Rafah and Khan Younis. Civilians endure harsh conditions, with many living in makeshift tents and surviving on scarce food. Children's education has been halted due to destroyed schools.

                                Gaza's medical facilities are on the edge of breakdown, swamped with patients and short on supplies. Around 5,500 expectant mothers are finding it hard to get the necessary medical attention for giving birth. Additionally, the scarcity of water and sanitary products has left over 690,000 women and girls facing significant challenges related to privacy and cleanliness.</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div >
        </div>
    );
}

export default Civilians;