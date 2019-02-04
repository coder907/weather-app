import React from 'react';

export default function Location(props) {
  const location = props.location;
  const countryName = location.countryName();

  return (
    <div className="condition-flexbox">
      <div className="condition-inlinebox">
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
