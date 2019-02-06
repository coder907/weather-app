import React from 'react';

import dates from '../utils/dates';

export default function Refresh(props) {
  const measuredAtText = dates.toHourMinute24(props.updated);

  return (
    <div className="update-inlinebox">
      <div className="update-flexbox">
        <span
          className="update-description"
        >Measured at {measuredAtText}</span>
          <img
            className="update-icon"
            src="img/weather/wi-refresh.svg"
            title="Refresh"
            alt="Refresh"
            onClick={props.onRefresh}
          />
      </div>
    </div>
  );
}
