import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay/WeatherDisplay';
import { APIkey, mlabKey } from './config/index';
import axios from 'axios';

class App extends Component {
  state = {
    input: ''
  };

  render() {
    return (
      <div>
        <h1>Weather App!</h1>
        <SearchBar
          searchInput={this.searchInput}
          handleCity={this.handleCity}
        />
        <WeatherDisplay APIkey={APIkey} input={this.state.input} />
      </div>
    );
  }

  searchInput = ({ target: { value } }) => {
    this.setState({ input: value });
  };

  handleCity = async ({ target: { value } }) => {
    await axios
      .get(
        `https://api.mlab.com/api/a/databases/openweathermap_gbtowns/collections/towns?q=${
          this.state.input
        }&apiKey=${mlabKey}`
      )
      .then(result => {
        console.log(result);
      })
      .catch(err => console.log(err));
  };
}

export default App;
