import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay/WeatherDisplay';
import { APIkey } from './config/index';
import axios from 'axios';
import { capitalize } from 'lodash';

class App extends Component {
  state = {
    input: '',
    chosenCity: 'Manchester'
  };

  render() {
    return (
      <div>
        <h1>Weather App!</h1>
        <SearchBar
          searchInput={this.searchInput}
          handleCity={this.handleCity}
        />
        <WeatherDisplay APIkey={APIkey} chosenCity={this.state.chosenCity} />
      </div>
    );
  }

  searchInput = ({ target: { value } }) => {
    this.setState({ input: value });
  };

  handleCity = async ({ target: { value } }) => {
    await axios
      .get(
        `https://whispering-harbor-65248.herokuapp.com/${capitalize(
          this.state.input
        )}`
      )
      .then(({ data: { result } }) => {
        if (result[0]) {
          this.setState({
            chosenCity: result[0].name
          });
        } else alert('That is not a valid location, please try again');
      })
      .catch(err => console.log(err));
  };
}

export default App;
