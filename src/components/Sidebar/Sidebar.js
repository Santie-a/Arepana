import React from 'react';
import './Sidebar.css';

const Sidebar = ({ isOpen, onClose }) => {
    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <button className="sidebar-close" onClick={onClose}>
                &times;
            </button>
            <h2>Menú</h2>
            <div className="sidebar-options">
                <button className="sidebar-option">Sobre Nosotros</button>
                <button className="sidebar-option">Contacto</button>
                <button className="sidebar-option">Planes y membresias</button>
				<button className="sidebar-option">Politicas de privacidad</button>
            </div>
        </div>
    );
};

export default Sidebar;