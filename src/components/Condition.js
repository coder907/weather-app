import React from 'react';

import strings from '../utils/strings';

export default function Condition(props) {
  const condition = props.condition;
  const main = strings.capitalizeWords(condition.main);
  const description = strings.capitalizeWords(condition.description);

  return (
    <div className="condition-inlinebox">
      <div className="condition-flexbox">
        <img
          className="condition-icon"
          src={condition.iconUrl()}
          title={main}
          alt={main}
        />
        <span
          className="condition-description"
        >{description}</span>
      </div>
    </div>
  );
}
