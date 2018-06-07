import React, { Component } from 'react';
import axios from 'axios';
import CurrentWeather from './CurrentWeather';

class WeatherDisplay extends Component {
  state = {
    cityData: {},
    weatherData: []
  };

  componentDidMount = async () => {
    const data = await this.fetchData();
    this.setState({
      cityData: data.city,
      weatherData: data.list
    });
  };

  render() {
    const { cityData, weatherData } = this.state;
    return (
      <CurrentWeather
        cityData={this.state.cityData}
        weatherData={this.state.weatherData}
      />
    );
  }

  fetchData = async () => {
    const { APIkey, chosenCity } = this.props;
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?id=${
        chosenCity.id
      }&mode=json${APIkey}`
    );
    return data;
  };
}

export default WeatherDisplay;
