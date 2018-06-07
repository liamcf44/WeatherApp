import React from 'react';

const SelectMetric = ({ metrics, selectMetric }) => {
  return (
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
  );
};

export default SelectMetric;
