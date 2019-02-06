import React from 'react';

import dates from '../utils/dates';

import './Refresh.css';

export default function Refresh(props) {
  const measuredAt = dates.toHourMinute24(props.updated);

  return (
    <div className="refresh-inlinebox">
      <div className="refresh-flexbox">
        <span
          className="refresh-description"
        >Measured at {measuredAt}</span>
        <img
          className="refresh-icon"
          src="img/weather/wi-refresh.svg"
          title="Refresh"
          alt="Refresh"
          onClick={props.onRefresh}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
        />
      </div>
    </div>
  );
}

function onMouseDown(e) {
  e.target.classList.add('refresh-icon-pressed');
}

function onMouseUp(e) {
  e.target.classList.remove('refresh-icon-pressed');
}
