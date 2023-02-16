import React, {useContext, useEffect, useState} from "react";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import {SingleAd} from './SingleAd';
import {SimpleAdEntity} from 'types';
import {SearchContext} from "../../contexts/serchcontext";
import 'leaflet/dist/leaflet.css';
import '../../utils/fix-map-icon';
import './Map.css';

export const Map = () => {
    const {search, setSearch} = useContext(SearchContext);
    const [ads, setAds] = useState<SimpleAdEntity[]>([]);

    useEffect(() => {
        (async () => {
            const response = await fetch(`http://localhost:3001/ad/search/${search}`);
            const ads = await response.json();

            setAds(ads);

        })();
    }, [search])

    return (
        <>
            <div className="map">
                <MapContainer center={[53.17444844997625, -2.9206361335265636]} zoom={14}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> & contributors"
                    />

                    {
                        ads.map(ad => (
                            <Marker key={ad.id} position={[ad.lat, ad.lon]}>
                                <Popup>
                                    <SingleAd id={ad.id}/>

                                </Popup>
                            </Marker>
                        ))
                    }
                </MapContainer>
            </div>
        </>
    );
};
