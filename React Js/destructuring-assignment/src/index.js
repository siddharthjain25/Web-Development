import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import cars from './practice';

const [honda, tesla] = cars;
const {speedStats: {topSpeed: hondaTopSpeed}, coloursByPopularity: {0: hondaTopColour}} = honda;
const {speedStats: {topSpeed: teslaTopSpeed}, coloursByPopularity: {0: teslaTopColour}} = tesla;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>
);
