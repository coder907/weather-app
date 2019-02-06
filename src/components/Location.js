import React from 'react';

import './Location.css';

export default function Location(props) {
  const location = props.location;
  const countryName = location.countryName();

  return (
    <div className="location-flexbox">
      <div className="location-inlinebox">
        <span
          className="location-city"
        >{location.city}</span>
        <img
          className="location-flag"
          src={location.flagUrl()}
          title={countryName}
          alt={countryName}
        />
      </div>
    </div>
  );
}
