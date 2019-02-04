import React, { Component } from 'react';

import locationService from '../services/locationService';
import weatherService from '../services/weatherService';
import Search from '../components/Search';
import Clock from '../components/Clock';
import Weather from '../components/Weather';

export default class App extends Component {

  state = {
    snapshot: null,
    message: null,
    loading: false,
  }

  componentDidMount() {
    locationService.requestLocation()
      .then(
        location => this.__handleShow(location && location.city)
      );
  }

  __handleShow = (city) => {
    this.__requestData(city);
  }

  __requestData = (city) => {
    if (this.state.loading) {
      return;
    }

    if (!city) {
      return;
    }

    city = city.trim().toLowerCase();

    if (!city) {
      return;
    }

    this.setState({
      loading: true,
    });

    weatherService.requestData(city)
      .then(snapshot => {
        if (!snapshot.equals(this.state.snapshot)) {
          this.setState({
            snapshot,
            message: null,
          });
        }
      })
      .catch(error => {
        console.log('Error', error);

        if (error.cod === 404) {
          this.setState({
            snapshot: null,
            message: `City '${error.city}' was not found.`
          });
        } else if (error.message) {
          this.setState({
            snapshot: null,
            message: error.message,
          });
        }
      })
      .then(() => {
        this.setState({
          loading: false,
        });
      });
  }

  onRefresh = () => {
    const snapshot = this.state.snapshot;

    if (snapshot) {
      this.__requestData(snapshot.location.city);
    }
  }

  render() {
    const message = this.state.message;

    return (
      <div className="app-container">
        <div className="app-inlinebox">
          <div className="app-flexbox">
            <Clock />
            <Search
              onShow={this.__handleShow}
            />
            {
              message === null ?
                <Weather
                  snapshot={this.state.snapshot}
                  loading={this.state.loading}
                  onRefresh={this.onRefresh}
                />
                :
                <div className="app-error">{message}</div>
            }
          </div>
        </div>
      </div>
    );
  }
}
