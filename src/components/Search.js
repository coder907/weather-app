import React, { Component } from 'react';

import AsyncSelect from 'react-select/lib/Async';

import locationService from '../services/locationService';
import SearchItem from './SearchItem';

export default class Search extends Component {

  state = {
    inputValue: '',
  }

  loadOptions = (inputValue, callback) => {
    locationService.searchCities(inputValue, callback);
  }

  noOptionsMessage = (params) => {
    if (params.inputValue === '') {
      return 'Start typing ...'
    } else {
      return 'No cities found.';
    }
  }

  onInputChange = (value, params) => {
    const action = params.action;

    if (action === 'input-change') {
      this.setState({inputValue: value});
    }
  }

  render() {
    return (
      <div className="search-container">
        {/* <pre>{this.state.inputValue}</pre> */}
        <AsyncSelect
          loadOptions={this.loadOptions}
          components={{ Option: SearchItem }}
          placeholder="Enter city ..."
          noOptionsMessage={this.noOptionsMessage}
          autoFocus={true}
          inputValue={this.state.inputValue}
          onInputChange={this.onInputChange}
        />
      </div>
    );
  }
}
