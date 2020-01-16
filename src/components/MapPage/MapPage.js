import React from 'react';
import MainMap from '../MainMap/MainMap';
import Header from '../Header/Header';
import './MapPage.css';

const MapPage = props => {
    return (
        <div className='MapPage'>
            <MainMap />
            <Header onPageChange={props.onPageChange} page='MapPage' />
        </div>
    );
};

export default MapPage;
