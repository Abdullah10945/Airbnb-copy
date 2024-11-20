import React, { useState } from 'react';

export default function SearchBar() {
  const [location, setLocation] = useState('');

  const handleSearch = () => {
    alert(`Searching for location: ${location}`); //temprary measure
  };

  return (
    <div className="d-flex justify-content-center mt-3">
      <div className="input-group" style={{ maxWidth: '500px', width: '100%' }}>
        <input
          type="text"
          className="form-control"
          placeholder="Enter location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button
          className="btn btn-primary"
          type="button"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
}
