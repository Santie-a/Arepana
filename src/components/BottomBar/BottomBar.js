import React, { useState } from 'react';
import './BottomBar.css';

const BottomBar = ({ locations, onReserve, onLocation }) => {
    const [location, setLocation] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);

    const handleReserveClick = () => {
        if (location) {
            onReserve(location); // Llama a la función de reserva pasando la ubicación
            setLocation(''); // Limpia el campo de entrada
        }
    };

    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchTerm(query);
    
        // Filtrar y obtener las 5 mejores coincidencias
        if (query !== '') {
            const results = locations
                .filter((location) => location.name.toLowerCase().includes(query))
                .slice(0, 5); // Limitar a 5 resultados
        
            setFilteredResults(results);
        } else {
            setFilteredResults([]);
        }
    };

    return (
        <div className="bottom-bar">
            {filteredResults.length > 0 && (
                <ul className="search-results fade-in">
                {filteredResults.map((result) => (
                    <li
                        key={result.key}
                        className="search-item"
                        onClick={() => setLocation(result.name)}
                    >
                        {result.name}
                    </li>
                ))}
                </ul>
            )}
            <input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Ingresa el lugar de la reserva"
                className="search-input"
            />            
            <button onClick={handleReserveClick} className="reserve-button">
                Reservar
            </button>
        </div>
    );
};

export default BottomBar;
