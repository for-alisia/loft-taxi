import React from 'react';
import logoImg from './logo.png';
import './Logo.css';

const Logo = () => {
    return (
        <div className='Logo'>
            <img className='Logo__img' src={logoImg} alt='Logo Taxi' />
        </div>
    );
};

export default Logo;
