import React from 'react';
import './Sidebar.css';

const Sidebar = ({ isOpen, onClose, onComponentChange }) => {
    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <button className="sidebar-close" onClick={onClose}>
                &times;
            </button>
            <h2>Menú</h2>
            <div className="sidebar-options">
            <button 
                    className="sidebar-option"
                    id = "map-button"
                    onClick={() => onComponentChange('map')}>
                    Mapa
                </button>
                <button 
                    className="sidebar-option" 
                    onClick={() => onComponentChange('profile')}>
                    Perfil
                </button>
                <button 
                    className="sidebar-option" 
                    onClick={() => onComponentChange('aboutUs')}>
                    Sobre Nosotros
                </button>
                <button 
                    className="sidebar-option" 
                    onClick={() => onComponentChange('contact')}>
                    Contacto
                </button>
                <button 
                    className="sidebar-option" 
                    onClick={() => onComponentChange('membershipPlans')}>
                    Planes y membresías
                </button>
                <button 
                    className="sidebar-option" 
                    onClick={() => onComponentChange('privacyPolicy')}>
                    Políticas de privacidad
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
