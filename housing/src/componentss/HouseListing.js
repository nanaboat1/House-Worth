import React from 'react';
import './HouseListing.css';


function HouseListing() {
  const houses = [
    {
      id: 1,
      name: 'Cozy Cottage',
      price: '$150/night',
      description: 'A charming little cottage in the countryside',
      image: 'https://via.placeholder.com/300x200.png?text=Cozy+Cottage',
    },
    {
      id: 2,
      name: 'Luxury Villa',
      price: '$500/night',
      description: 'An elegant villa with stunning ocean views',
      image: 'https://via.placeholder.com/300x200.png?text=Luxury+Villa',
    },
    {
      id: 3,
      name: 'Mountain Cabin',
      price: '$250/night',
      description: 'A cozy cabin nestled in the mountains',
      image: 'https://via.placeholder.com/300x200.png?text=Mountain+Cabin',
    },
      {
        id: 1,
        name: 'Cozy Cottage',
        price: '$150/night',
        description: 'A charming little cottage in the countryside',
        image: 'https://via.placeholder.com/300x200.png?text=Cozy+Cottage',
      },
      {
        id: 2,
        name: 'Luxury Villa',
        price: '$500/night',
        description: 'An elegant villa with stunning ocean views',
        image: 'https://via.placeholder.com/300x200.png?text=Luxury+Villa',
      },
      {
        id: 3,
        name: 'Mountain Cabin',
        price: '$250/night',
        description: 'A cozy cabin nestled in the mountains',
        image: 'https://via.placeholder.com/300x200.png?text=Mountain+Cabin',
      },
    
  
  ];


  function handleBookNow(id) {
    console.log(`Book now button clicked for house with id ${id}`);
  }

  return (
    <div className="house-listing">
      <h1>Featured Houses</h1>
      <div className="house-grid">
        {houses.map((house) => (
          <div className="house" key={house.id}>
            <img src={"https://www.thehousedesigners.com/images/uploads/SiteImage-Landing-house-plans-with-photos-1.webp"} alt={house.name} />
            <h2>{house.name}</h2>
            <p>{house.price}</p>
            <p>{house.description}</p>
            <button className="book-now-button" onClick={() => handleBookNow(house.id)}>Book Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HouseListing;
