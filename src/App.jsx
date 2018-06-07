import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay/WeatherDisplay';
import { APIkey } from './config/index';

class App extends Component {
  state = {
    chosenCity: {
      name: 'Manchester',
      id: '2643123'
    }
  };

  render() {
    return (
      <div>
        <h1>Weather App!</h1>
        <SearchBar />
        <WeatherDisplay APIkey={APIkey} chosenCity={this.state.chosenCity} />
      </div>
    );
  }
}

export default App;
