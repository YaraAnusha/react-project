
import React, { useState } from 'react';

const CompanyManagement = () => {
  const [companies, setCompanies] = useState([]);
  const [newCompany, setNewCompany] = useState({ name: '', location: '', linkedIn: '', emails: '', phoneNumbers: '', comments: '', communicationPeriodicity: '' });

  const addCompany = () => {
    setCompanies([...companies, newCompany]);
    setNewCompany({ name: '', location: '', linkedIn: '', emails: '', phoneNumbers: '', comments: '', communicationPeriodicity: '' });
  };

  const deleteCompany = (index) => {
    const updatedCompanies = companies.filter((_, i) => i !== index);
    setCompanies(updatedCompanies);
  };

  return (
    <div>
      <h2>Company Management</h2>
      <input type="text" placeholder="Company Name" value={newCompany.name} onChange={(e) => setNewCompany({ ...newCompany, name: e.target.value })} />
      <input type="text" placeholder="Location" value={newCompany.location} onChange={(e) => setNewCompany({ ...newCompany, location: e.target.value })} />
      <input type="text" placeholder="LinkedIn Profile" value={newCompany.linkedIn} onChange={(e) => setNewCompany({ ...newCompany, linkedIn: e.target.value })} />
      <input type="text" placeholder="Emails" value={newCompany.emails} onChange={(e) => setNewCompany({ ...newCompany, emails: e.target.value })} />
      <input type="text" placeholder="Phone Numbers" value={newCompany.phoneNumbers} onChange={(e) => setNewCompany({ ...newCompany, phoneNumbers: e.target.value })} />
      <input type="text" placeholder="Comments" value={newCompany.comments} onChange={(e) => setNewCompany({ ...newCompany, comments: e.target.value })} />
      <input type="text" placeholder="Communication Periodicity" value={newCompany.communicationPeriodicity} onChange={(e) => setNewCompany({ ...newCompany, communicationPeriodicity: e.target.value })} />
      <button onClick={addCompany}>Add Company</button>

      <h3>Companies List</h3>
      <ul>
        {companies.map((company, index) => (
          <li key={index}>
            {company.name} <button onClick={() => deleteCompany(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyManagement;