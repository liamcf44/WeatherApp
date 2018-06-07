import React, { Component } from 'react';
import CreateGraph from './CreateGraph';
import SelectMetric from './SelectMetric';

class WeatherGraph extends Component {
  state = {
    metrics: ['Temperature', 'Wind Speed', 'Humidity'],
    chosenMetric: 'Temperature'
  };

  render() {
    return (
      <section>
        <SelectMetric
          metrics={this.state.metrics}
          selectMetric={this.selectMetric}
        />
        <CreateGraph
          weatherData={this.filterData()}
          metric={this.state.chosenMetric}
          cityData={this.props.cityData}
        />
      </section>
    );
  }

  filterData = () => {
    const { weatherData } = this.props;
    const { chosenMetric } = this.state;
    const filteredData = weatherData.reduce((acc, weatherBlock) => {
      acc.push({
        label: weatherBlock.dt_txt,
        value:
          chosenMetric === 'Temperature'
            ? (weatherBlock.main.temp - 273.15).toFixed(1)
            : chosenMetric === 'Wind Speed'
              ? weatherBlock.wind.speed
              : chosenMetric === 'Humidity'
                ? weatherBlock.main.humidity
                : null
      });
      return acc;
    }, []);
    return filteredData;
  };

  selectMetric = ({ target: { value } }) => {
    this.setState({ chosenMetric: value });
  };
}

export default WeatherGraph;
