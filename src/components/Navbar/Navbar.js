import React from 'react';
import './Navbar.css';

const Navbar = ({ onToggleSidebar }) => {
    return (
        <div className="navbar">
            <h1 className="navbar-title">AREPANA</h1>
            <button className="navbar-toggle" onClick={onToggleSidebar}>
                ☰
            </button>
        </div>
    );
};

export default Navbar;
