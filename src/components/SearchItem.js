import React from 'react';

import Option from 'react-select/lib/components/Option';

const SearchItem = (props) => (
  <Option {...props}>
    {label(props.data, props.options)}
    {icon(props.data)}
  </Option>
);

export default SearchItem;

function label(location, locations) {
  const citiesWithTheSameName = locations.filter(
    l => l.city.toLowerCase() === location.city.toLowerCase()
  );

  if (citiesWithTheSameName.length >= 2) {
    return `${location.city}, ${location.region}`;
  } else {
    return location.city;
  }
}

function icon(location) {
  const countryName = location.countryName();

  return <img
    className="search-item-icon"
    src={location.flagUrl()}
    title={countryName}
    alt={countryName}
  />;
}
