import React from 'react';
import './MainMap.css';
import mapBg from './map_bg.png';

const MainMap = () => {
    return (
        <div className='MainMap'>
            <img className='MainMap__img' src={mapBg} alt='Map' />
        </div>
    );
};

export default MainMap;
