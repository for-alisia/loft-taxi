import React from 'react';
import MainMap from '../../components/MainMap';
import './MapPage.scss';
import OrderForm from '../../components/OrderForm';

const MapPage = () => {
    return (
        <div className='MapPage'>
            <OrderForm />
            <MainMap />
        </div>
    );
};

export default MapPage;
