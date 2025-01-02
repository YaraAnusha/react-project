// src/CommunicationModal.js
import React, { useState } from 'react';

const CommunicationModal = ({ onClose, onSubmit }) => {
    const [type, setType] = useState('');
    const [date, setDate] = useState('');
    const [notes, setNotes] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ type, date, notes });
    };

    return (
        <div className="modal">
            <fieldset>
            <legend>Log Communication</legend>
            <form onSubmit={handleSubmit}>
                <label>
                    Type of Communication:
                    <select value={type} onChange={(e) => setType(e.target.value)} required>
                        <option value >Select...</option>
                        <option value="LinkedIn Post">LinkedIn Post</option>
                        <option value="Email">Email</option>
                        <option value="Phone Call">Phone Call</option>
                    </select>
                </label>
                <label>
                    Date of Communication:
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Add Notes:
                    <textarea
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                    />
                </label><br></br>
                <button type="submit" >Submit</button>
                <div className='cls'>
                <button type="button" onClick={onClose}>Cancel</button>
                </div>
            </form>
            </fieldset>
        </div>
    );
};

export default CommunicationModal;