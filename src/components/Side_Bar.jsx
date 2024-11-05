import React from 'react';
import './SideBar.css';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const navigate = useNavigate();

    const handleClick1 = () => {
        navigate('/first-form'); // Correct path
    }

    const handleClick2 = () => {
        navigate('/second-form'); // Correct path
    }

    const handleClick3 = () => {
        navigate('/third-form'); // Correct path
    }

    return (
        <div className="sidebar">
            <div className="logo">
                <img src='./logo.jpeg' alt='OricLogo' />
            </div>
            <nav className="sidebar-nav">
                <div className="sidebar-item" onClick={handleClick1}>Google-Form 1</div>
                <div className="sidebar-item" onClick={handleClick2}>Google-Form 2</div>
                <div className="sidebar-item" onClick={handleClick3}>Google-Form 3</div>
            </nav>
        </div>
    );
};

export default Sidebar;
