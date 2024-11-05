import React from 'react';
import './UserPage.css';
import Navbar from './Navbar';
import Sidebar from './Side_Bar';
import User_Page1 from './User_Page1';


const UserPage = () => {
    return (
        <div className="user-page-container">
            <Sidebar />
            <div className="main-content">
                <Navbar />
                <div className="other-content">
                    <User_Page1 />
                </div>
            
            </div>
        </div>
    );
};

export default UserPage;
