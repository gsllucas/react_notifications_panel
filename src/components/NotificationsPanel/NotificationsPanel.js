import React from 'react';

import './NotificationsPanel.css';

const NotificationsPanel = ({ children }) => {
  return (
    <div className="page-container">
      <div className="notifications-container">{children}</div>
    </div>
  );
};

export default NotificationsPanel;
