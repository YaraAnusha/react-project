import React from 'react';

const CalendarView = ({companies}) => {
  return (
    <div>
      <fieldset>
      <legend>Calendar View</legend>
      <h3>Past Communications</h3>
            {/* Display past communications here */}
            <h3>Upcoming Communications</h3>
            {/* Display upcoming communications here */}
            </fieldset>
    </div>
  );
};

export default CalendarView;