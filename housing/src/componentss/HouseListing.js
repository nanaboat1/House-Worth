import React from 'react';
import './HouseListing.css';


function HouseListing() {
  const houses = [
    {
      id: 1,
      name: 'Cozy Cottage',
      price: '$150/night',
      description: 'A charming little cottage in the countryside, An elegant villa with stunning ocean views, An elegant villa with stunning ocean views, An elegant villa with stunning ocean views,       A charming little cottage in the countryside, An elegant villa with stunning ocean views, An elegant villa with stunning ocean views, An elegant villa with stunning ocean views',
      image: 'https://images1.apartments.com/i2/GQ9cC-bt_ZIyxEOrNAX2gxjS1AMT8Io31BgKQXoq4yk/117/affinity-at-mirabeau-spokane-valley-wa-affinity-community-entrance.jpg',
    },

    {
      id: 3,
      name: 'Mountain Cabin',
      price: '$250/night',
      description: 'A cozy cabin nestled in the mountains',
      image: 'https://images1.apartments.com/i2/6bBJ_H6VDCNqTD1DJmXNB_j8E_6WVq8x-zjO4QeQbm4/117/15300-nw-fair-acres-dr-vancouver-wa-building-photo.jpg',
    },
    {
      id: 1,
      name: 'Cozy Cottage',
      price: '$150/night',
      description: 'A charming little cottage in the countryside',
      image: 'https://images1.apartments.com/i2/kUBV4fOlJIjyemg2Ypy9_n_xjHFylX8O9HqqB4AKY4A/117/image.jpg',
    },

  ];


  function handleBookNow(id) {
    console.log(`Book now button clicked for house with id ${id}`);
  }

  return (
    <div className="house-listing">
      <div className='housing-grid-backdrop'></div>
      <h1>Featured  ✨</h1>
      <div className="house-grid">
        {houses.map((house) => (
          <div className="house" key={house.id}>
            <img src={house.image} alt={house.name} />
            <h2>{house.name}</h2>
            <p>{house.price}</p>
            <p className='house-description'>{house.description}</p>
            <button className="book-now-button" onClick={() => handleBookNow(house.id)}>Book Now</button>
          </div>
        ))}
        <div className="house">
          <img src='https://images1.apartments.com/i2/3mWYwhum5Fu3b7nREALwiJkk26nJ4TzcrCe80eHeJdc/117/image.jpg' alt={houses[1].name} />
          <div className='house-desc-cont'>
            <h2>Luxury Villa</h2>
            <p>{'500/night'}</p>
            <p className='house-description'>{houses[1].description}</p>
            <button className="book-now-button" onClick={() => handleBookNow(houses[1].id)}>Book Now</button>
          </div></div>
      </div>
    </div>
  );
}

export default HouseListing;
