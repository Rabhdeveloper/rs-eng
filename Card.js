import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import img1 from './Image/vid1.jpg'; // Image for Machine 1
import img2 from './Image/m1.jpeg';  // Image for Machine 2
import img3 from './Image/vid2.jpg';  // Image for Machine 3
import img4 from './Image/2.jpg';  // Image for Machine 4
import img5 from './Image/1.jpg';   // Image for Machine 5

function Card() {
  const cardData = [
    {
      id: 1,
      img: img1,
      title: 'Power grading system',
      text: 'Checking performance and Grading  .',
      link: '/page.js', // Assuming a separate page component for Machine 1 details
    },
    {
      id: 2,
      img: img2,
      title: '150 kvar APFC Panal',
      text: 'offers innovative solutions for complex tasks.',
      link: '/page2', // Assuming a separate page component for Machine 2 details
    },
    {
      id: 3,
      img: img3,
      title: 'Power supply unit of multi story bulidings',
      text: 'Power and efficiency calculator.',
      link: '/page3', // Assuming a separate page component for Machine 3 details
    },
    {
      id: 4,
      img: img4,
      title: 'Cooling controller',
      text: 'Heat Reducer of all the unit.',
      link: '/page4', // Assuming a separate page component for Machine 4 details
    },
    {
      id: 5,
      img: img5,
      title: 'Machine 5',
      text: 'Control unit and maintain.',
      link: '/page5', // Assuming a separate page component for Machine 5 details
    },
  ];

  return (
    <div className="card-container">
      {cardData.map((card) => (
        <div className="card" key={card.id}>
          <img src={card.img} className="card-img-top" alt={card.title} />
          <div className="card-body">
            <h5 className="card-title">{card.title}</h5>
            <p className="card-text">{card.text}</p>
            <Link to={card.link} className="btn btn-primary">
              Learn More
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;