import React, { Component } from 'react';

export default class Search extends Component {

  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }

  __onClick = (e) => {
    this.__onShow();
  }

  __onKeyUp = (e) => {
    if (e.key.toLowerCase() === 'enter') {
      this.__onShow();
    }
  }

  __onShow = () => {
    this.props.onShow(this.__inputValue());
  }

  __inputValue = () => {
    const input = this.inputRef.current;

    if (input) {
      return input.value;
    } else {
      return '';
    }
  }

  render() {
    return (
      <div className="search-container">
        <input
          className="search-input"
          type="text"
          placeholder="Enter city ..."
          spellCheck="false"
          onKeyUp={this.__onKeyUp}
          ref={this.inputRef}
        />
        <button
          className="search-button"
          type="button"
          onClick={this.__onClick}
        >Show</button>
      </div>
    );
  }
}
