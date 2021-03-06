import React from 'react';

function currentWeather({ cityData, weatherData }) {
  if (weatherData[0]) {
    return (
      <section>
        <div>
          <h3>{cityData.name} Current Weather</h3>
          <p>{`Forecast: ${weatherData[0].weather[0].main}`}</p>
          <p>{`Temperature: ${(weatherData[0].main.temp - 273.15).toFixed(
            1
          )}°C`}</p>
          <p>{`Humidity: ${weatherData[0].main.humidity}%`}</p>
          <p>{`Wind Speed: ${weatherData[0].wind.speed} meter/sec`}</p>
        </div>
        <br />
        <div className="weathericon">
          <i class="far fa-sun fa-10x" />
        </div>
      </section>
    );
  } else return <p>Loading Current Weather....</p>;
}

export default currentWeather;
