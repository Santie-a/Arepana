import React, { useState } from 'react';
import {APIProvider} from '@vis.gl/react-google-maps';
import MapComponent from './components/MapComponent/MapComponent';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import ChatButton from './components/ChatButton/ChatButton';
import BottomBar from './components/BottomBar/BottomBar';
import ReservationConfirmation from './components/ReservationConfirmation/ReservationConfirmation';
import { locations } from './data/locations';
import './App.css';


const App = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [reservationMessage, setReservationMessage] = useState('');
    const [isConfirmationVisible, setConfirmationVisible] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleChatClick = () => {
        // Aquí puedes manejar la apertura del chat
        alert("Chat Abierto"); // Ejemplo: abrir un modal o componente de chat
    };

    const handleReserve = (location) => {
        // Lógica para manejar la reserva
        setReservationMessage(`Tu reserva en ${location} ha sido realizada.`);
        setConfirmationVisible(true); // Muestra el modal de confirmación
    };

    const handleCloseConfirmation = () => {
        setConfirmationVisible(false); // Cierra el modal de confirmación
    };

    return (
        <div className="App">
            <Navbar onToggleSidebar={toggleSidebar} />
            <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar}/>
            <APIProvider apiKey={process.env.REACT_APP_API_KEY} onLoad={() => console.log('Maps API has loaded.')}>
                <div className="map-container">
                    <MapComponent />
                </div>
            </APIProvider>
            <ChatButton onClick={handleChatClick} />
            <BottomBar locations={locations} onReserve={handleReserve}/>
            {isConfirmationVisible && 
                <ReservationConfirmation 
                    message={reservationMessage} 
                    onClose={handleCloseConfirmation} 
                />
            }
        </div>
    );
};

export default App;