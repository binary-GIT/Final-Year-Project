import React, { useState } from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import PostAddIcon from '@mui/icons-material/PostAdd';

import './Sidebar.css';

export default function Sidebar({ isCollapsed, toggleSidebar }) {
  const [isSubmitExpanded, setIsSubmitExpanded] = useState(false); // State to manage Submit menu toggle

  // Function to toggle the dropdown visibility
  const handleSubmitClick = () => {
    setIsSubmitExpanded(prev => !prev); // Toggle the dropdown visibility
  };

  const menuItems = [
    { icon: <PersonIcon />, label: 'Profile' },
    { 
      icon: <PostAddIcon />, 
      label: 'Submit', 
      onClick: handleSubmitClick // Handle both icon and label click
    },
    { icon: <SettingsIcon />, label: 'Settings' },
    { icon: <ExitToAppIcon />, label: 'Logout' },
  ];

  return (
    <div className={`sidebar ${isCollapsed ? 'collapsed' : 'expanded'}`}>
      {/* Toggle Button */}
      <div className="toggle-btn" onClick={toggleSidebar}>
        {isCollapsed ? <ChevronRightIcon /> : <ChevronLeftIcon />}
      </div>

      {/* Menu Items */}
      <ul className="menu">
        {menuItems.map((item, index) => (
          <li key={index} className="menu-item">
            <div className="menu-icon" onClick={item.onClick}>
              {item.icon}
            </div>
            {!isCollapsed && <span className="menu-label">{item.label}</span>}

            {/* Conditionally render dropdown for "Submit" */}
            {item.label === 'Submit' && isSubmitExpanded && !isCollapsed && (
              <ul className="sub-menu">
                <li className="sub-menu-item">Form 1</li>
                <li className="sub-menu-item">Form 2</li>
                <li className="sub-menu-item">Form 3</li>
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
