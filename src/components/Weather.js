import React, { Component, Fragment } from 'react';

import { ClipLoader } from 'react-spinners';

import Location from './Location';
import Conditions from './Conditions';
import Measurements from './Measurements';
import Refresh from './Refresh';

import './Weather.css';

export default class Weather extends Component {

  render() {
    const snapshot = this.props.snapshot;
    const loading = this.props.loading;

    if (!loading && !snapshot) {
      return <Fragment />;
    }

    return (
      <div className="weather-flexbox-container">
        {
          loading ?
            <div className="weather-spinner-container">
              <ClipLoader
                size={100}
                color={'rgb(4, 16, 48)'}
                loading={loading}
              />
            </div>
          :
            <Fragment>
              <div className="weather-flexbox-header">
                <div className="weather-flexbox-left">
                  <Location location={snapshot.location} />
                  <Conditions conditions={snapshot.conditions} />
                </div>
                <div className="weather-flexbox-right">
                  <Measurements measurements={snapshot.measurements} />
                </div>
              </div>
              <div className="weather-flexbox-footer">
                <Refresh
                  updated={snapshot.timestamp}
                  onRefresh={this.props.onRefresh}
                />
              </div>
            </Fragment>
        }
      </div>
    );
  }
}
