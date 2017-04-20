import React from 'react';
import ReactDOM from 'react-dom';
import DateRange from './DateRange';
import SingleDate from './SingleDate';
import './index.css';
import '@myob/myob-styles/dist/styles/myob.css';

ReactDOM.render(
  <div>
    <DateRange />
    <SingleDate />
  </div>,
    document.getElementById('root')
);
