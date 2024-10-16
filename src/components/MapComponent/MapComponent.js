import React, { useState } from 'react';
import { Map, AdvancedMarker, Pin } from '@vis.gl/react-google-maps';
import './MapComponent.css';
import { locations } from '../../data/locations';



const MapComponent = () => {
	const mapOptions = {
        draggable: true,
        scrollwheel: true,
        zoomControl: true,
        streetViewControl: false,
        fullscreenControl: false,
    };

    const [selectedPoi, setSelectedPoi] = useState(null);

    const handleMarkerClick = (location) => {
        setSelectedPoi(location);
    };

    const PoiMarkers = ({ pois }) => {	
        return (
            <>
                {pois.map((poi) => (
                    <AdvancedMarker
                        key={poi.key}
                        position={poi.location}
                        onClick={() => handleMarkerClick(poi)}
                    >
                        <Pin background={'#FBBC04'} glyphColor={'#000'} borderColor={'#000'} />
                    </AdvancedMarker>
                ))}
            </>
        );
    };

    return (
        <div className="map-container">
            <Map
                defaultCenter={ {lat: 4.611, lng: -74.08175} }
                defaultZoom={13} 
                style={{ width: '100%', height: '100vh' }}
				mapId="6aec0025cd0bbb4"
                options={mapOptions}
			>
				<PoiMarkers pois={locations}/>

                {selectedPoi && (
                <div className="info-box">
                    <h3>{selectedPoi.name}</h3>
                    <p>{selectedPoi.description}</p>
                    <button onClick={() => setSelectedPoi(null)}>Cerrar</button>
                </div>
      )}
            </Map>
        </div>
    );
};

export default MapComponent;
