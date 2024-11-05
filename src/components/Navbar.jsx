import React from 'react';
import { FaSearch} from 'react-icons/fa';
import './Navbar.css';
import { IoPersonSharp } from "react-icons/io5";
import { VscFlame } from "react-icons/vsc";
import { IoSettingsSharp } from "react-icons/io5";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-search">
                <FaSearch className="search-icon" />
                <input type="text" placeholder="Search" />
            </div>
            <div className="navbar-icons">
                <VscFlame className="notification-icon" />
                <div className="profile">
                    <IoPersonSharp className="profile-icon" />
                    <IoSettingsSharp className="profile-icon" />
                    <div className="profile-info">
                        <span className="profile-name">Umair</span>
                        <span className="profile-role">Admin</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
