import React from 'react';

import { Calendar } from 'react-calendar-component';
import moment from 'moment';
import 'moment/locale/nb';
import cx from 'classnames';

class CalendarExample extends React.Component {
  state = {
    date: moment()
  };


  render() {
    return (
      <Calendar
        onChangeMonth={date => this.setState({ date })}
        date={this.state.date}

        onPickDate={this.props.PickDate.bind(date => date.format('YYYY-MM-DD'))}
        
        renderDay={({ day, classNames, onPickDate }) => (
          <div
            key={day.format()}
            className={cx(
              'Calendar-grid-item',
              day.isSame(moment(), 'day') && 'Calendar-grid-item--current',
              classNames
            )}
            onClick={e => onPickDate(day)}
          >
            {day.format('D')}
          </div>
        )}
        
        PickDate={this.props.PickDate.bind(this)}

        renderHeader={({ date, onPrevMonth, onNextMonth }) => (
          <div className="Calendar-header">
            <button onClick={onPrevMonth}>«</button>
            <div className="Calendar-header-currentDate">
              {date.format('MMMM')}
            </div>
            <button onClick={onNextMonth}>»</button>
          </div>
        )}
      />
    );
  }
}
export default CalendarExample;
