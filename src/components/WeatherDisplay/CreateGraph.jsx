import React from 'react';
import fusioncharts from 'fusioncharts';
import charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
charts(fusioncharts);

function createGraph({ weatherData, metric, cityData }) {
  let average =
    weatherData.reduce((acc, val) => {
      acc += +val.value;
      return acc;
    }, 0) / weatherData.length;

  let chartConfigs = {
    type: 'line',
    className: 'fc-line',
    width: '1000',
    height: '600',
    dataFormat: 'JSON',
    dataSource: {
      chart: {
        caption: `${cityData.name} ${metric} for the Next 5 Days`,
        xAxisname: 'Time and Date',
        yAxisName:
          metric === 'Temperature'
            ? 'Temperature in Celsius'
            : metric === 'Wind Speed'
              ? 'Wind Speed in Meter/Sec'
              : metric === 'Humidity'
                ? 'Humidity in %'
                : null,
        lineThickness: '2',
        paletteColors: '#0075c2',
        baseFontColor: '#333333',
        baseFont: 'Helvetica Neue,Arial',
        captionFontSize: '14',
        subcaptionFontSize: '14',
        subcaptionFontBold: '0',
        showBorder: '0',
        bgColor: '#ffffff',
        showShadow: '0',
        canvasBgColor: '#ffffff',
        canvasBorderAlpha: '0',
        divlineAlpha: '100',
        divlineColor: '#999999',
        divlineThickness: '1',
        divLineDashed: '1',
        divLineDashLen: '1',
        showXAxisLine: '1',
        xAxisLineThickness: '1',
        xAxisLineColor: '#999999',
        showAlternateHGridColor: '0',
        showHoverEffect: '1'
      },
      data: weatherData,
      trendlines: [
        {
          line: [
            {
              startvalue: `${average}`,
              color: '#1aaf5d',
              displayvalue: `Average{br}${metric}`,
              valueOnRight: '1',
              thickness: '2'
            }
          ]
        }
      ]
    }
  };

  return <ReactFC {...chartConfigs} />;
}

export default createGraph;
