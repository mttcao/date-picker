import React from 'react';
import ReactDOM from 'react-dom';
import DateRange from './DateRange';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DateRange />, div);
});
