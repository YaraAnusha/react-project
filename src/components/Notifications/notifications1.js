
import React from 'react';

const Notifications = () => {
  // Sample data for demonstration
  const overdueCommunications = [
    { company: 'Company A', dueDate: '5th September' },
    { company: 'Company C', dueDate: '3rd September' },
  ];

  const todaysCommunications = [
    { company: 'Company B', dueDate: '10th September' },
  ];

  return (
    <div>
      <fieldset>
        
      <legend>Notifications</legend>
      <h3>Overdue Communications</h3>
      <ul>
        {overdueCommunications.map((notification, index) => (
          <li key={index}>{notification.company} - Due on {notification.dueDate}</li>
        ))}
      </ul>

      <h3>Today's Communications</h3>
      <ul>
        {todaysCommunications.map((notification, index) => (
          <li key={index}>{notification.company} - Due today</li>
        ))}
      </ul>
      </fieldset>
    </div>
  );
};

export default Notifications;