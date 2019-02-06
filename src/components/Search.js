import React, { Component } from 'react';

import AsyncSelect from 'react-select/lib/Async';

import Location from '../models/Location';
import locationService from '../services/locationService';
import SearchItem from './SearchItem';

export default class Search extends Component {

  selectRef;
  timeoutId = null;

  state = {
    location: null,
  }

  loadOptions = (inputValue, callback) => {
    locationService.searchCities(inputValue, callback);
  }

  onChange = (location) => {
    this.clearTimeout();

    if (!location.equals(this.state.location)) {
      this.setState({ location });
      this.props.onSelect(location);
    }
  }

  onKeyDown = (e) => {
    if (e.key.toLowerCase() === 'enter') {
      // Will be discarded if user selected a location from menu
      const location = new Location(
        undefined,
        undefined,
        undefined,
        e.target.value,
      );

      this.selectRef.blur();
      this.selectRef.focus();

      this.scheduleChange(location);
    }
  }

  scheduleChange = (location) => {
    this.timeoutId = window.setTimeout(
      () => this.onChange(location),
      100
    );
  }

  clearTimeout = () => {
    if (this.timeoutId) {
      window.clearTimeout(this.timeoutId);
      this.timeoutId = null;
    }
  }

  noOptionsMessage = (params) => {
    if (params.inputValue === '') {
      return 'Start typing ...'
    } else {
      return 'Press Enter to load data.';
    }
  }

  render() {
    return (
      <AsyncSelect
        ref={ref => { this.selectRef = ref; }}
        components={{ Option: SearchItem }}
        loadOptions={this.loadOptions}
        onChange={this.onChange}
        onKeyDown={this.onKeyDown}
        value={null}
        placeholder="Select city ..."
        noOptionsMessage={this.noOptionsMessage}
        autoFocus={true}
      />
    );
  }
}
