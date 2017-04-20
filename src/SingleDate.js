import React from 'react';
// import './DateRange.css';
// import Moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

const initialState = {
    // date: new Moment(),
    date: null,
    focused: false,
};

class SingleDatePickerWrapper extends React.Component {
  constructor() {
    super();
    this.state = initialState;
  }

  render() {

    return (
      <div className="App-header margin-bottom-60">
        <h3 className="padding-bottom-10">2. Copy selected day(s) to</h3>
        <label className="padding-left-10">Select starting date:</label>
        <div>
          <SingleDatePicker
            date={this.state.date} // momentPropTypes.momentObj or null
            onDateChange={date => this.setState({ date })} // PropTypes.func.isRequired
            focused={this.state.focused} // PropTypes.bool
            onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
            showClearDate={true}
            placeholder={"Select Date"}
            // reopenPickerOnClearDate={true}
            // withPortal={true}
          />
        </div>
      </div>
    );
  }
}

export default SingleDatePickerWrapper;



