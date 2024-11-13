import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import Sidebar from './Sidebar';
import { rgbToHex } from '@mui/material';
import { green } from '@mui/material/colors';

export default function NavbarWithSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      {/* Sidebar */}
      <Sidebar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div
        style={{
          marginLeft: isCollapsed ? '60px' : '180px', // Adjust content position
          width: `calc(100% - ${isCollapsed ? '60px' : '180px'})`,
          transition: 'margin-left 0.3s ease, width 0.3s ease',
        }}
      >
        <AppBar
          position="static"
          style={{
            backgroundColor: '#0a5b7f',
            borderBottom: '1px solid #d1d1d1',
          }}
        >
          <Toolbar
            style={{
              display: 'flex',
              justifyContent: 'space-between', // Space between title and search bar
              alignItems: 'center',
            }}
          >
            {/* Dashboard Title */}
            <Typography variant="h6" noWrap>
              ORIC DATA PORTAL
            </Typography>

            {/* Search Bar */}
            <TextField
              placeholder="Search..."
              variant="outlined"
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              style={{
                backgroundColor: 'whitesmoke', // Make the search bar stand out
                borderRadius: '5px',
                width: '300px',
              }}
            />
          </Toolbar>
        </AppBar>

        {/* Example Content */}
        <div style={{ padding: '20px' }}>
          <h1>Welcome to the Dashboard</h1>
          <p>Content goes here...</p>
        </div>
      </div>
    </div>
  );
}
