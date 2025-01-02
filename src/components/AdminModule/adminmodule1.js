import React, { useState } from 'react';

const AdminModule = () => {
  const [companies, setCompanies] = useState([]);
  const [newCompany, setNewCompany] = useState({ name: '', location: '', linkedIn: '', emails: '', phoneNumbers: '', comments: '', periodicity: '' });
  const [error, setError] = useState('');

  const addCompany = () => {
    if (!newCompany.name) {
      setError('Company name is required.');
      return;
    }
    if (companies.some(company => company.name === newCompany.name)) {
      setError('Company name must be unique.');
      return;
    }
    setCompanies([...companies, newCompany]);
    setNewCompany({ name: '', location: '', linkedIn: '', emails: '', phoneNumbers: '', comments: '', periodicity: '' });
    setError('');
  };


  const handleDelete = (index) => {
    const newCompanies = companies.filter((_, i) => i !== index);
    setCompanies(newCompanies);
};
  return (
    <div>
      <fieldset>
      <legend>Admin Module</legend>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input type="text" placeholder="Company Name" value={newCompany.name} onChange={(e) => setNewCompany({ ...newCompany, name: e.target.value })} />
      <input type="text" placeholder="Location" value={newCompany.location} onChange={(e) => setNewCompany({ ...newCompany, location: e.target.value })} />
      <input type="text" placeholder="LinkedIn Profile" value={newCompany.linkedIn} onChange={(e) => setNewCompany({ ...newCompany, linkedIn: e.target.value })} />
      <input type="text" placeholder="Emails" value={newCompany.emails} onChange={(e) => setNewCompany({ ...newCompany, emails: e.target.value })} />
      <input type="text" placeholder="Phone Numbers" value={newCompany.phoneNumbers} onChange={(e) => setNewCompany({ ...newCompany, phoneNumbers: e.target.value })} />
      <input type="text" placeholder="Comments" value={newCompany.comments} onChange={(e) => setNewCompany({ ...newCompany, comments: e.target.value })} />
      <input type="text" placeholder="Communication Periodicity" value={newCompany.periodicity} onChange={(e) => setNewCompany({ ...newCompany, periodicity: e.target.value })} />
      <button onClick={addCompany}>Add Company</button>
      <ul>
        {companies.map((company, index) => (
          <li key={index}>{company.name} - {company.location}
                        <button onClick={() => handleDelete(index)}>Delete</button></li>
        ))}
      </ul>
      </fieldset>
    </div>
  );
};

export default AdminModule;