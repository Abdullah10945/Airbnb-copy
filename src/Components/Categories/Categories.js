import React, { useRef } from 'react';
import './Categories.css';

export default function Categories() {
    const categories = [
        { name: 'Beachfront', icon: '🏖️' },
        { name: 'Cabins', icon: '🏡' },
        { name: 'Trending', icon: '🔥' },
        { name: 'Luxury', icon: '💎' },
        { name: 'Mountains', icon: '⛰️' },
        { name: 'Camping', icon: '🏕️' },
        { name: 'Castles', icon: '🏰' },
        { name: 'Boats', icon: '⛵' },
        { name: 'Urban', icon: '🏙️' },
        { name: 'Rural', icon: '🌾' },
        { name: 'Lakes', icon: '🏞️' },
        { name: 'Farms', icon: '🚜' },
        { name: 'Historical', icon: '🏛️' },
        { name: 'Islands', icon: '🏝️' },
        { name: 'Treehouses', icon: '🌲' },
        { name: 'Desert', icon: '🏜️' },
        { name: 'Skiing', icon: '⛷️' },
        { name: 'Villas', icon: '🏘️' },
        { name: 'Cottages', icon: '🏠' },
        { name: 'Mansions', icon: '🏚️' },
        { name: 'Waterfront', icon: '🌊' },
        { name: 'Glamping', icon: '⛺' },
        { name: 'Eco-friendly', icon: '🌱' },
        { name: 'Yachts', icon: '🛥️' },
        { name: 'Pet-friendly', icon: '🐾' },
        { name: 'Adventure', icon: '🎢' },
        { name: 'Romantic', icon: '❤️' },
      ];

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -200 : 200,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="categories-container d-flex align-items-center position-relative">
      {/* Left Arrow */}
      <button
        className="scroll-button left"
        onClick={() => scroll('left')}
        aria-label="Scroll Left"
      >
        ◀️
      </button>

      {/* Categories List */}
      <div className="categories-list d-flex overflow-auto" ref={scrollRef}>
        {categories.map((category, index) => (
          <div
            key={index}
            className="category-item text-center mx-3 d-flex flex-column align-items-center"
          >
            <div className="category-icon">{category.icon}</div>
            <span className="category-name mt-2">{category.name}</span>
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        className="scroll-button right"
        onClick={() => scroll('right')}
        aria-label="Scroll Right"
      >
        ▶️
      </button>
    </div>
  );
}
