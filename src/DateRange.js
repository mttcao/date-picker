import React from 'react';
// import PropTypes from 'prop-types';
// import momentPropTypes from 'react-moment-proptypes';
import './SingleDate.css';
// import Moment from 'moment';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

const initialState = {
  focused: false,
};

class DateRangePickerWrapper extends React.Component {
  constructor() {
    super();
    this.state = initialState;
  }

  render() {
    // const { focusedInput, startDate, endDate } = this.state;

    return (
      <div>
        <h3 className="padding-bottom-10">1. Select day(s) to apply</h3>
        <span className="padding-left-20 padding-right-60"><label>From:</label></span>
        <span className="padding-left-60"><label>To:</label></span>
        <div>
          <DateRangePicker
              startDate={this.state.startDate} // momentPropTypes.momentObj or null,
              endDate={this.state.endDate} // momentPropTypes.momentObj or null,
              onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
              focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
              onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
              showClearDates={true}
              />
        </div>
      </div>
    );
  }
}

export default DateRangePickerWrapper;

