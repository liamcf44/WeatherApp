import React from 'react';

const SelectMetric = ({ metrics, selectMetric }) => {
  return (
    <div>
      <span>Metric: </span>
      <select onChange={selectMetric}>
        <option defaultValue>Choose Your Metric</option>
        {metrics.map(metric => {
          return (
            <option key={metric} value={metric}>
              {metric}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectMetric;
