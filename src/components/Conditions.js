import React, { Fragment } from 'react';

import Condition from './Condition';
export default function Conditions(props) {
  return (
    <Fragment>
      {props.conditions.map((condition, index) => (
        <Condition
          key={condition.id}
          condition={condition}
        />
      ))}
    </Fragment>
  );
}
