import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay/WeatherDisplay';
import { APIkey } from './config/index';
import { townData } from './data/gbData';

class App extends Component {
  state = {
    chosenCity: {
      name: 'Manchester',
      id: '2643123'
    },
    input: ''
  };

  render() {
    return (
      <div>
        <h1>Weather App!</h1>
        <SearchBar searchInput={this.searchInput} />
        <WeatherDisplay APIkey={APIkey} chosenCity={this.state.chosenCity} />
      </div>
    );
  }

  searchInput = ({ target: { value } }) => {
    this.setState({ input: value });
  };
}

export default App;
