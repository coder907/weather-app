import React from 'react';

import locationService from '../services/locationService';

export default function Location(props) {
  const location = props.location;
  const countryName = locationService.countryCodeToName(location.countryCode);

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
