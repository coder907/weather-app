import React, { Component } from 'react';

import dates from '../utils/dates';

export default class Clock extends Component {

  state = {
    dt: new Date(),
  }

  componentDidMount() {
    this.__intervalId = window.setInterval(
      this.tick,
      250,
    );
  }

  shouldComponentUpdate(nextProps, nextState) {
    const currentMinute = this.state.dt.getMinutes();
    const nextMinute = nextState.dt.getMinutes();

    if (currentMinute === nextMinute) {
      return false;
    }

    return true;
  }

  componentWillUnmount() {
    this.clearInterval();
  }

  tick = () => {
    this.setState({
      dt: new Date(),
    });
  }

  clearInterval() {
    if (this.__intervalId) {
      window.clearInterval(this.__intervalId);
      this.__intervalId = null;
    }
  }

  render() {
    const dt = this.state.dt;
    const day = dates.toWeekdayMonthDay(dt);
    const hour = dates.toHourMinute24(dt);

    return (
      <div className="clock-container">
        <div className="clock-day">{day}</div>
        <div className="clock-hour">{hour}</div>
      </div>
    );
  }
}
