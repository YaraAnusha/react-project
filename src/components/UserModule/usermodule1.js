import React from 'react';
import AdminModule from "../AdminModule/adminmodule1";

import CommunicationModal from "../communicationmodel/communicationmodal";
import CalendarView from '../CalendarView/CalendarView1';
import Dashboard from '../Dashboard/dashboard1';
import Notifications from '../Notifications/notifications1';

const UserModule = () => {
  return (
    <div>
     <p><Dashboard></Dashboard></p>
      <AdminModule></AdminModule>
     
      <CommunicationModal></CommunicationModal>
      <p><CalendarView></CalendarView></p>
      <p><Notifications></Notifications></p>
    </div>
  );
};

export default UserModule;