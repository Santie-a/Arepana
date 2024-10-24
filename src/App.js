// React imports
import React, { useState } from 'react';
import {APIProvider} from '@vis.gl/react-google-maps';

// Map component
import MapComponent from './components/MapComponent/MapComponent';

// Navbar
import Navbar from './components/Navbar/Navbar';

// Sidebar components
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import AboutUs from './components/AboutUs/AboutUs';
import Contact from './components/Contact/Contact';
import MembershipPlans from './components/MembershipPlans/MembershipPlans';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';

// Chat components
import ChatButton from './components/ChatButton/ChatButton';
import Contacts from './components/Contacts/Contacts';

// Other components
import BottomBar from './components/BottomBar/BottomBar';
import ReservationConfirmation from './components/ReservationConfirmation/ReservationConfirmation';
import { locations } from './data/locations';
import './App.css';


const App = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isChatOpen, setChatOpen] = useState(false);
    const [reservationMessage, setReservationMessage] = useState('');
    const [isConfirmationVisible, setConfirmationVisible] = useState(false);
    const [activeComponent, setActiveComponent] = useState('map');

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleChatClick = () => {
        setChatOpen(!isChatOpen);
    };

    const handleReserve = (location) => {
        // Lógica para manejar la reserva
        setReservationMessage(`Tu reserva en ${location} ha sido realizada.`);
        setConfirmationVisible(true); // Muestra el modal de confirmación
    };

    const handleCloseConfirmation = () => {
        setConfirmationVisible(false); // Cierra el modal de confirmación
    };

    const handleComponentChange = (componentName) => {
        setActiveComponent(componentName);
        toggleSidebar(); // Close sidebar after selecting
    };

    const renderComponent = () => {
        switch (activeComponent) {
            case 'map':
                return  <APIProvider apiKey={process.env.REACT_APP_API_KEY} onLoad={() => console.log('Maps API has loaded.')}>
                            <div className="map-container">
                                <MapComponent />
                            </div>
                        </APIProvider>;
            case 'profile':
                return <Profile />;
            case 'aboutUs':
                return <AboutUs />;
            case 'contact':
                return <Contact />;
            case 'membershipPlans':
                return <MembershipPlans />;
            case 'privacyPolicy':
                return <PrivacyPolicy />;
            default:
                return  <div></div>;
        }
    };

    return (
        <div className="App">
            <Navbar onToggleSidebar={toggleSidebar} />
            <Sidebar
                isOpen={isSidebarOpen} 
                onClose={toggleSidebar}
                onComponentChange={handleComponentChange}
            />
            {renderComponent()}
            {activeComponent === 'map' && <BottomBar locations={locations} onReserve={handleReserve}/>}
            {isConfirmationVisible && 
                <ReservationConfirmation 
                    message={reservationMessage} 
                    onClose={handleCloseConfirmation} 
                />
            }
            {isChatOpen && <Contacts />}
            <ChatButton onClick={handleChatClick} />
        </div>
    );
};

export default App;