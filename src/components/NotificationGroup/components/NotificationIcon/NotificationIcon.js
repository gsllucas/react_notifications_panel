import React from 'react';

import './NotificationIcon.css';

const NotificationIcon = ({ children, backgroundColor }) => {
  return (
    <div className="icon-badge" style={{ backgroundColor }}>
      {children}
    </div>
  );
};

export default NotificationIcon;
