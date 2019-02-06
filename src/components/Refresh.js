import React from 'react';

import dates from '../utils/dates';
import './Refresh.css';

export default function Refresh(props) {
  const measuredAtText = dates.toHourMinute24(props.updated);

  return (
    <div className="refresh-inlinebox">
      <div className="refresh-flexbox">
        <span
          className="refresh-description"
        >Measured at {measuredAtText}</span>
          <img
            className="refresh-icon"
            src="img/weather/wi-refresh.svg"
            title="Refresh"
            alt="Refresh"
            onClick={props.onRefresh}
          />
      </div>
    </div>
  );
}
