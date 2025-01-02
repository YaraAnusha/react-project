// src/App.js
import React from 'react';
import Dashboard from './Dashboard';
import Notifications from './Notifications';
import CalendarView from './CalendarView';

const App = () => {
    return (
        <div>
            <h1>User Module</h1>
            <Dashboard />
            <Notifications />
            <CalendarView />
        </div>
    );
};

export default App;