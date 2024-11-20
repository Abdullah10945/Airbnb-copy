import React from 'react';
import './ListingCard.css';

export default function ListingCard({ property }) {
  return (
    <div className="listing-card">
      <img src={property.image} alt={property.title} className="listing-image" />
      <div className="listing-details">
        <h5>{property.title}</h5>
        <p>{property.type}</p>
        <p>
          {property.guests} guests · {property.bedrooms} bedrooms ·{' '}
          {property.bathrooms} bathrooms
        </p>
        <p className="price">{property.price}</p>
        <p className="rating">⭐ {property.rating}</p>
      </div>
    </div>
  );
}
