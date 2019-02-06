import React from 'react';

export default function Measurement(props) {
  return (
    <div className="measurement-container">
      <div className="measurement-inlinebox">
        <div className="measurement-flexbox">
          <img
            className="measurement-icon"
            src={iconUrl(props.icon)}
            title={props.description}
            alt={props.description}
          />
          <span
            className="measurement-value"
          >{props.value}</span>
        </div>
      </div>
    </div>
  );
}

function iconUrl(icon) {
  return `img/weather/${icon}`;
}
