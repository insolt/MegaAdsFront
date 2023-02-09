import React from "react";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";

import './Map.css';
import 'leaflet/dist/leaflet.css';
import '../../utils/fix-map-icon';

export const Map = () => {
    return (
        <>
            <div className="map">
                <MapContainer center={[53.17444844997625, -2.9206361335265636]} zoom={13}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> & contributors"
                    />
                    <Marker position={[53.17444844997625, -2.9206361335265636]}>
                        <Popup>
                            <h3>NASZ DOM</h3>
                            <p>Iwona i Michal</p>
                        </Popup>
                    </Marker>
                    <Marker position={[53, -3]}>
                        <Popup>
                            <p>Przypadkowa lokalizacja</p>
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </>
    );
};
