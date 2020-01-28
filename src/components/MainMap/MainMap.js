import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import './MainMap.scss';

mapboxgl.accessToken =
    'pk.eyJ1IjoiZm9yLWFsaXNpYSIsImEiOiJjazVwOGpsMXUxZG1uM2pxcG1seDJlcnluIn0.IPVqWi8huDVbyJw4_4MQ-g';

export default class MainMap extends Component {
    componentDidMount() {
        this.map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-79.38, 43.65],
            zoom: 12
        });

        console.log(this.map.getCenter());
    }

    render() {
        return (
            <div className='MainMap' ref={el => (this.mapContainer = el)}></div>
        );
    }
}
