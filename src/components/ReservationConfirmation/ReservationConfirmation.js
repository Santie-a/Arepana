import React from 'react';
import './ReservationConfirmation.css';

const ReservationConfirmation = ({ message, onClose }) => {
    return (
        <div className="confirmation-overlay">
            <div className="confirmation-modal">
                <h2>Reserva Confirmada</h2>
                <p>{message}</p>
                <button onClick={onClose} className="close-button">Cerrar</button>
            </div>
        </div>
    );
};

export default ReservationConfirmation;
