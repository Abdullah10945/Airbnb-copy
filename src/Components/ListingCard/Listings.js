import React from 'react';
import ListingCard from './ListingCard';

export default function Listings() {
  const properties = [
    {
      image: './cozy beachfront house.jpg',
      title: 'Cozy Beachfront House',
      type: 'Entire House',
      guests: 4,
      bedrooms: 2,
      bathrooms: 1,
      price: '$120/night',
      rating: 4.8,
    },
    {
      image: 'luxury cabin woods.jpg',
      title: 'Luxury Cabin in Woods',
      type: 'Entire Cabin',
      guests: 10,
      bedrooms: 5,
      bathrooms: 4,
      price: '$600/night',
      rating: 4.9,
    },
    {
      image: 'urban apartment downtown.jpg',
      title: 'Urban Apartment Downtown',
      type: 'Private Room',
      guests: 2,
      bedrooms: 1,
      bathrooms: 1,
      price: '$80/night',
      rating: 4.5,
    },
    {
      image: 'mountain retreat.jpg',
      title: 'Mountain Retreat',
      type: 'Entire Home',
      guests: 6,
      bedrooms: 3,
      bathrooms: 2,
      price: '$150/night',
      rating: 4.7,
    },
    {
      image: 'historical castle.jpg',
      title: 'Historical Castle Stay',
      type: 'Entire Castle',
      guests: 20,
      bedrooms: 10,
      bathrooms: 8,
      price: '$10000/night',
      rating: 4.9,
    },
  ];

  return (
     <div className="container mt-5">
      <h3>Available Properties</h3>
      <div className="row">
        {properties.map((property, index) => (
          <div className="col-md-4" key={index}>
            <ListingCard property={property}/>
          </div>
        ))}
      </div>
      </div>
  );
}
