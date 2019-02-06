import React, { Component } from 'react';

import locationService from '../services/locationService';
import weatherService from '../services/weatherService';
import Search from '../components/Search';
import Clock from '../components/Clock';
import Weather from '../components/Weather';
import './App.css';

export default class App extends Component {

  state = {
    snapshot: null,
    message: null,
    loading: false,
  }

  componentDidMount() {
    locationService.requestLocation()
      .then(
        location => this.handleSelect(location)
      );
  }

  handleSelect = (location) => {
    this.requestData(location);
  }

  requestData = (location) => {
    if (this.state.loading) {
      return;
    }

    if (!location) {
      return;
    }

    this.setState({
      loading: true,
    });

    weatherService.requestData(location)
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
            message: `City '${error.location.city}' was not found.`
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
      this.requestData(snapshot.location);
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
              onSelect={this.handleSelect}
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
