
import React from 'react';

const Dashboard = () => {
  // Sample data for demonstration
  const companies = [
    { name: 'Company A', lastCommunications: ['LinkedIn Post - 5th September'], nextCommunication: 'Email - 10th September' },
    { name: 'Company B', lastCommunications: ['Email - 1st September'], nextCommunication: 'Phone Call - 15th September' },
  ];

  return (
    <div>
      <fieldset>
        <legend>Dashboard</legend>
      
      <table border='2'>
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Last Five Communications</th>
            <th>Next Scheduled Communication</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company, index) => (
            <tr key={index}>
              <td>{company.name}</ td>
              <td>{company.lastCommunications.join(', ')}</td>
              <td>{company.nextCommunication}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      </fieldset>
    </div>
  );
};

export default Dashboard;
