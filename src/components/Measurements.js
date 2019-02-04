import React, { Fragment } from 'react';

import Measurement from './Measurement';

export default function Measurements(props) {
  const measurements = props.measurements;

  return (
    <Fragment>
      <Measurement
        description={'Temperature'}
        icon={'wi-thermometer.svg'}
        value={formatTemperature(measurements.temperature)}
      />
      <Measurement
        description={'Pressure'}
        icon={'wi-barometer.svg'}
        value={formatPressure(measurements.pressure)}
      />
      <Measurement
        description={'Humidity'}
        icon={'wi-humidity.svg'}
        value={formatHumidity(measurements.humidity)}
      />
      <Measurement
        description={'Wind'}
        icon={'wi-small-craft-advisory.svg'}
        value={formatWind(measurements.wind)}
      />
      <Measurement
        description={'Cloud Cover'}
        icon={'wi-cloudy.svg'}
        value={formatClouds(measurements.clouds)}
      />
    </Fragment>
  );
}

function formatTemperature(value) {
  return Math.round(value - 273.15) + '°C';
}

function formatPressure(value) {
  return value + ' hPa';
}

function formatHumidity(value) {
  return value + '%';
}

function formatWind(value) {
  return (
    formatWindSpeed(value.speed) +
    formatWindDirection(value.direction)
  );
}

function formatWindSpeed(value) {
  return Math.round(value * 3.6) + ' km/h ';
}

const windDirections = [
  'N', 'NNE', 'NE', 'ENE',
  'E', 'ESE', 'SE', 'SSE',
  'S', 'SSW', 'SW', 'WSW',
  'W', 'WNW', 'NW', 'NNW'
];

function formatWindDirection(value) {
  if (!value) {
    return '';
  }
  const index = Math.floor((value / 22.5) + 0.5) % 16;
  return windDirections[index];
}

function formatClouds(value) {
  return value + '%';
}
